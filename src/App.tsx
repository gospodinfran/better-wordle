import { useEffect, useState } from "react";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import Keyboard from "./components/Keyboard";
import LostMenu from "./components/LostMenu";
import VictoryMenu from "./components/VictoryMenu";
import WordMapper from "./components/WordMapper";

function App() {
  const [correctWord, setCorrectWord] = useState('')
  const [words, setWords] = useState([['', '', '', '', ''], ['', '', '', '', ''], ['', '', '', '', ''], 
  ['', '', '', '', ''], ['', '', '', '', ''], ['', '', '', '', '']])
  const [index, setIndex] = useState(0)
  const [userForm, setUserForm] = useState('')
  const [completed, setCompleted] = useState(false)

  useEffect(() => {
    fetch('https://fran-api-bundle.herokuapp.com/wordle')
      .then(response => response.json())
      .then(data => {
        // 687 words in JSON
        const x = Math.ceil(Math.random() * 687)
        setCorrectWord(data.wordleWords[x]);
      })
      .catch(err => console.log('Error fetching data: ', err));
  }, []);

  function handleInputChange(e: any) {
    const regex: RegExp = /^[a-zA-Z]+$/
    const inputValue = e.target.value

    if (userForm.length === 5 && inputValue.length < userForm.length) {
      setUserForm(inputValue)
    }

    if ((regex.test(inputValue) || inputValue === '') && userForm.length < 5 ) {
      setUserForm(inputValue)
    } 
  }

  function handleFormSubmit(e: React.ChangeEvent) {
    e.preventDefault()
    if (index < 6) {
      if (userForm.length === 5) {
        const word = userForm.toUpperCase().split('')
      setWords((prevWords) => [
        ...prevWords.slice(0, index),
        word,
        ...prevWords.slice(index + 1),
      ])
      setIndex(prev => prev + 1)
      setUserForm('')
      }
    }
  }

  return (
    <>
      <Header />
      <WordMapper words={words} answer={correctWord} setCompleted={setCompleted} />
      <InputForm value={userForm} onChange={handleInputChange} onSubmit={handleFormSubmit} />
      <VictoryMenu completed={completed} />
      <LostMenu show={index == 6 && !completed} word={correctWord} />
      <Keyboard answer={correctWord} words={words} />
    </>
  )
}

export default App
