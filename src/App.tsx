import { useEffect, useState } from "react";
import Header from "./components/Header";
import Keyboard from "./components/Keyboard";
import LostMenu from "./components/LostMenu";
import VictoryMenu from "./components/VictoryMenu";
import WordMapper from "./components/WordMapper";
import { DndContext } from "@dnd-kit/core";


function App() {
  const [darkTheme, setDarkTheme] = useState(true)
  //const [correctWord, setCorrectWord] = useState('')
  const [words, setWords] = useState<string[][]>(() => 
  localStorage.getItem('words') ? JSON.parse(localStorage.getItem('words')!) : [['', '', '', '', ''], ['', '', '', '', ''], ['', '', '', '', ''], 
  ['', '', '', '', ''], ['', '', '', '', ''], ['', '', '', '', '']])
  const [index, setIndex] = useState(0)
  //const [userForm, setUserForm] = useState('')
  const [hangmanForm, setHangmanForm] = useState(['', '', '', '', ''])
  const [completed, setCompleted] = useState(false)

  const correctWord = 'anime'

  {/*useEffect(() => {
    if (localStorage.getItem('lastPlayDate') !== new Date().toLocaleDateString()) {
      setWords([['', '', '', '', ''], ['', '', '', '', ''], ['', '', '', '', ''], 
      ['', '', '', '', ''], ['', '', '', '', ''], ['', '', '', '', '']])
    }

    fetch('https://fran-api-bundle.herokuapp.com/wordle')
      .then(response => response.json())
      .then(data => {
        // 687 words in JSON
        const x = Math.ceil(Math.random() * 687)
        setCorrectWord(data.wordleWords[x]);
      })
      .catch(err => console.log('Error fetching data: ', err));
  }, []);*/}

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



  {/*function handleInputChange(e: any) {
    const regex: RegExp = /^[a-zA-Z]+$/
    const inputValue = e.target.value

    if (userForm.length === 5 && inputValue.length < userForm.length) {
      setUserForm(inputValue)
    }

    if ((regex.test(inputValue) || inputValue === '') && userForm.length < 5 ) {
      setUserForm(inputValue)
    } 
  }

  async function handleFormSubmit(e: React.ChangeEvent) {
    e.preventDefault()

    localStorage.setItem('lastPlayDate', new Date().toLocaleDateString())


    if (index < 6) {
      if (userForm.length === 5) {
        const word = userForm.toUpperCase().split('')
        const word_as_string = word.join("").toLowerCase()

        try {
          console.log(word_as_string)
          const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word_as_string}`)
          const data = await response.json()
          if (data[0].word) {
            setWords((prevWords) => [
              ...prevWords.slice(0, index),
              word,
              ...prevWords.slice(index + 1),
            ])
            setIndex(prev => prev + 1)
            setUserForm('')
          }

        } catch (e) {
          console.log('Error: ', e)
        }
      }
    }
  }*/}

  function handleDragEnd({active, over}: {active: any, over: any}) {
    if (over) {
      setWords(words => {
        let curWord = words[index]
        curWord[over.id] = active.id
        return [...words.slice(0, index), curWord, ...words.slice(index + 1)]
      })
    }
  }

  return (
    <div className={`${darkTheme ? 'bg-[#171717]' : ''} h-full w-full min-h-screen`}>
      <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
      <DndContext onDragEnd={handleDragEnd}>
      <WordMapper darkTheme={darkTheme} words={words} answer={correctWord} setCompleted={setCompleted} curRow={index} />
      {/*<Underscores darkTheme={darkTheme} userForm={hangmanForm} />*/}
      <VictoryMenu completed={completed} />
      <LostMenu show={index == 6 && !completed} word={correctWord} />
      <Keyboard darkTheme={darkTheme} answer={correctWord} words={words} hangmanForm={hangmanForm} setHangman={setHangmanForm} />
      </DndContext>
      <button onClick={() => setIndex(prev => prev + 1)}>submit yo</button>
    </div>
  )
}

export default App
