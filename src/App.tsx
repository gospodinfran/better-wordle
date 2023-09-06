import { MouseEventHandler, useEffect, useState } from "react";
import Header from "./components/Header";
import Keyboard from "./components/Keyboard";
import LostMenu from "./components/LostMenu";
import VictoryMenu from "./components/VictoryMenu";
import WordMapper from "./components/WordMapper";
import { Active, DndContext, Over, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import toast, { Toaster } from "react-hot-toast";
import { wordData } from "./wordData";


function App() {
  const [darkTheme, setDarkTheme] = useState(true)
  const [correctWord, setCorrectWord] = useState('')
  const [words, setWords] = useState<string[][]>(() => 
  localStorage.getItem('words') ? JSON.parse(localStorage.getItem('words')!) : [['', '', '', '', ''], ['', '', '', '', ''], ['', '', '', '', ''], 
  ['', '', '', '', ''], ['', '', '', '', ''], ['', '', '', '', '']])
  const [parentKeys, setParentKeys] = useState<string[]>(['', '', '', '', ''])
  const [shake, setShake] = useState(false)
  const [index, setIndex] = useState(0)
  const [completed, setCompleted] = useState(false)

  useEffect(() => {
    const msPerDay = 1000 * 60 * 60 * 24
    const now = new Date()
    const startOfDay = new Date(now.getFullYear(), 0, 0)
    const elapsed = Number(now) - Number(startOfDay)

    const index = Math.floor(elapsed / msPerDay)
    setCorrectWord(wordData[index])
  }, [])
  
  const handleKeyPress = ((e: KeyboardEvent) => {
    const char = e.key
    console.log(e.key)
    if (char >= 'a' && char <= 'z') {
        handleKeyClick(char)
    }
    if (char === 'Backspace') {
      handleDeleteKey()
    }
    if (char === 'Enter') {
      handleFormSubmit()
    }
  })

  useEffect(() => {
    if (localStorage.getItem('lastPlayDate') !== new Date().toLocaleDateString()) {
      setWords([['', '', '', '', ''], ['', '', '', '', ''], ['', '', '', '', ''], 
      ['', '', '', '', ''], ['', '', '', '', ''], ['', '', '', '', '']])
    }

    window.addEventListener('keydown', handleKeyPress)

    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [parentKeys])

  const handleShake = function() {
    setShake(true)

    const timerId = setTimeout(() => {
      setShake(false)
    }, 1000)

    return () => clearTimeout(timerId)
  }

  useEffect(() => {
    localStorage.setItem('words', JSON.stringify(words))

    let populatedWords = 0
    for (let i = 0; i < 6; i++) {
      if (words[i][0] == '') {
        break
      }
      populatedWords++
    }
    setIndex(populatedWords)
  }, [words])

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  )

  function handleKeyClick(letter: string) {
    setParentKeys(word => {
      if (word[4] !== '')
        return word
      for (let i = 0; i < 5; i++) {
        if (word[i] === '') {
          const cpy = [...word]
          cpy[i] = letter
          return cpy
        }
      }
      return word
    })
  }

  async function handleFormSubmit(e?: React.FormEvent<HTMLFormElement> | MouseEventHandler<HTMLDivElement>) {
    if (e)
      (e as React.FormEvent & { preventDefault(): void }).preventDefault();

    localStorage.setItem('lastPlayDate', new Date().toLocaleDateString())
    
    if (index < 6 && parentKeys[4] !== '') {
      let word = parentKeys.join("").toUpperCase()
      let choppedWord = word.split('')


      try {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        const data = await response.json()
        if (data[0].word) {
          setWords((prevWords) => {
            const prev = [
              ...prevWords.slice(0, index),
              choppedWord,
              ...prevWords.slice(index + 1)
            ]
            return prev
          })
          setIndex(prev => prev + 1)
          setParentKeys(['', '', '', '', ''])
        } else {
        }
      } catch (e) {
        if (new Set(wordData).has(word)) {
          setWords((prevWords) => {
            const prev = [
              ...prevWords.slice(0, index),
              choppedWord,
              ...prevWords.slice(index + 1)
            ]
            return prev
          })
          setIndex(prev => prev + 1)
          setParentKeys(['', '', '', '', ''])
        } else if (e instanceof TypeError) {
          toast.dismiss()
          toast('Not in word list.')
          handleShake()
        } else {
          console.log('Error: ', e)
        }
      }
      } else {
        toast.dismiss()
        toast('Not enough letters')
        handleShake()
      }
  }

  function handleDeleteKey() {
    setParentKeys(word => {
      if (word[0] === '')
        return word
      for (let i = 4; i >= 0; i--) {
        if (word[i] !== '') {
          const cpy = [...word]
          cpy[i] = ''
          return cpy
        }
      }
      return word
    })
  }

  function handleDragEnd({active, over}: {active: Active, over: Over}) {
    if (over) {
      setParentKeys(word => {
        const key = String(active.id).toLowerCase() 
        const wordIndex = Number(over.id)
        let updated = [...word]
        updated[wordIndex] = key
        return updated
      })
    }
  }

  return (<>
    <Toaster />
    <div className={`${darkTheme ? 'bg-[#121213]' : ''} h-full w-full min-h-screen font-lora`}>
      <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
      <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
      <WordMapper darkTheme={darkTheme} words={words} answer={correctWord} setCompleted={setCompleted} curRow={index} parentKeys={parentKeys} shake={shake} />
      <VictoryMenu completed={completed} />
      <LostMenu show={index == 6 && !completed} word={correctWord} />
      <Keyboard darkTheme={darkTheme} answer={correctWord} words={words} onFormSubmit={handleFormSubmit} onKeyClick={handleKeyClick} onDeleteKey={handleDeleteKey} />
      </DndContext>
    </div>
    </>)
}

export default App
