import { useEffect, useState } from "react";
import Header from "./components/Header";
import Keyboard from "./components/Keyboard";
import LostMenu from "./components/LostMenu";
import VictoryMenu from "./components/VictoryMenu";
import WordMapper from "./components/WordMapper";
import { DndContext, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import { wordData } from "./wordData";


function App() {
  const [darkTheme, setDarkTheme] = useState(true)
  const [correctWord, setCorrectWord] = useState('')
  const [words, setWords] = useState<string[][]>(() => 
   [['', '', '', '', ''], ['', '', '', '', ''], ['', '', '', '', ''], 
  ['', '', '', '', ''], ['', '', '', '', ''], ['', '', '', '', '']])
  const [parentKeys, setParentKeys] = useState<string[]>(['', '', '', '', ''])
  const [index, setIndex] = useState(0)
  const [userForm, setUserForm] = useState('')
  const [completed, setCompleted] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('lastPlayDate') !== new Date().toLocaleDateString()) {
      setWords([['', '', '', '', ''], ['', '', '', '', ''], ['', '', '', '', ''], 
      ['', '', '', '', ''], ['', '', '', '', ''], ['', '', '', '', '']])
    }
    const corrWord = wordData[Math.floor(Math.random() * wordData.length)]
    setCorrectWord(corrWord)
  }, [])

  {/*useEffect(() => {
    // works fine can be added later
    localStorage.setItem('words', JSON.stringify(words))

    let populatedWords = 0
    for (let i = 0; i < 6; i++) {
      if (words[i][0] == '') {
        break
      }
      populatedWords++
    }
    setIndex(populatedWords)
  }, [words])*/}



  {/*function handleInputChange(e: any) {
    const regex: RegExp = /^[a-zA-Z]+$/
    const inputValue = e.target.value

    if (userForm.length === 5 && inputValue.length < userForm.length) {
      setUserForm(inputValue)
    }

    if ((regex.test(inputValue) || inputValue === '') && userForm.length < 5 ) {
      setUserForm(inputValue)
    } 
  }*/}

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  )

  function isFull(array: string[]) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === '')
        return false
    }
    return true
  }

  function handleKeyClick(letter: string) {
    for (let i = 0; i < parentKeys.length; i++) {
      if (parentKeys[i] === '') {
        setParentKeys(word => {
          let updatedWord = [...word]
          updatedWord[i] = letter
          return updatedWord
        })
        break
      }
    }
  }

  async function handleFormSubmit(e: React.ChangeEvent) {
    e.preventDefault()

    localStorage.setItem('lastPlayDate', new Date().toLocaleDateString())


    if (index < 6) {
      if (userForm.length === 5 || isFull(parentKeys)) {

        let word = parentKeys.join("").toLowerCase()
        let choppedWord = word.split('')
        console.log(word)
        console.log(choppedWord)


        try {
          const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
          const data = await response.json()
          if (data[0].word) {
            setWords((prevWords) => [
              ...prevWords.slice(0, index),
              choppedWord,
              ...prevWords.slice(index + 1),
            ])
            setIndex(prev => prev + 1)
            setParentKeys(['', '', '', '', ''])
            setUserForm('')
          }
        } catch (e) {
          console.log('Error: ', e)
        }
      }
    }
  }

  function handleDeleteKey() {
    console.log('clicked')
    for (let i = 4; i >= 0; i--) {
      if (parentKeys[i] !== '') {
        setParentKeys(word => {
          let updated = [...word]
          updated[i] = ''
          return updated
        })
        return
      }
    }
  }

  function handleDragEnd({active, over}: {active: any, over: any}) {
    if (over) {
      setParentKeys(word => {
        const key = active.id.toLowerCase()
        const wordIndex = over.id
        let updated = [...word]
        updated[wordIndex] = key
        return updated
      })
    }
  }

  return (
    <div className={`${darkTheme ? 'bg-[#171717]' : ''} h-full w-full min-h-screen`}>
      <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
      <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
      <WordMapper darkTheme={darkTheme} words={words} answer={correctWord} setCompleted={setCompleted} curRow={index} parentKeys={parentKeys} />
      <VictoryMenu completed={completed} />
      <LostMenu show={index == 6 && !completed} word={correctWord} />
      <Keyboard darkTheme={darkTheme} answer={correctWord} words={words} onFormSubmit={handleFormSubmit} onKeyClick={handleKeyClick} onDeleteKey={handleDeleteKey} />
      </DndContext>
      <h2 className="text-white">Debug only</h2>
      <button onClick={() => setIndex(prev => prev + 1)}
       className="bg-white p-1">Go to next row</button>
       <button onClick={() => setWords([['', '', '', '', ''], ['', '', '', '', ''], ['', '', '', '', ''], 
  ['', '', '', '', ''], ['', '', '', '', ''], ['', '', '', '', '']])}
  className="bg-white p-1">
        Reset game
       </button>
    </div>
  )
}

export default App
