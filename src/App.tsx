import { useEffect, useState } from "react"
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import WordMatrix from "./components/WordMatrix";

function App() {
  const [_correctWord, setCorrectWord] = useState('')
  const [words, setWords] = useState([['', '', '', '', ''], ['', '', '', '', ''], ['', '', '', '', ''], 
  ['', '', '', '', ''], ['', '', '', '', '']])
  const [index, setIndex] = useState(0)
  const [userForm, setUserForm] = useState('')

  useEffect(() => {
    const url = `https://api.datamuse.com/words?sp=?????&max=10000`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        let x = Math.ceil(Math.random() * 1000)
        const randomWord = data[x].word;
        setCorrectWord(JSON.stringify(randomWord));
      });
  }, []);

  function handleInputChange(e: any) {
    const regex: RegExp = /^[a-zA-Z]+$/
    const inputValue = e.target.value;

    if (userForm.length === 5 && inputValue.length < userForm.length) {
      setUserForm(inputValue)
    }

    if ((regex.test(inputValue) || inputValue === '') && userForm.length < 5 ) {
      setUserForm(inputValue);
    } 
  }

  function handleFormSubmit(e: React.ChangeEvent) {
    e.preventDefault()
    if (userForm.length === 5) {
      const word = userForm.split('')
    setWords((prevWords) => [
      ...prevWords.slice(0, index),
      word,
      ...prevWords.slice(index + 1),
    ]);
    setIndex(prev => prev + 1)
    setUserForm('')
    }
  }

  return (
    <>
      <Header />
      { words.map((word, index) => {
        return <WordMatrix 
        key={index}
        word={word}
        />
      }) }
      <InputForm value={userForm} onChange={handleInputChange} onSubmit={handleFormSubmit} />
    </>
  )
}

export default App
