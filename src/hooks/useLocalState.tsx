import { useEffect, useState } from "react";

export default function useLocalStorage(setIndex: React.Dispatch<React.SetStateAction<number>>) {
    const [words, setWords] = useState<string[][]>(() => 
  localStorage.getItem('words') ? JSON.parse(localStorage.getItem('words')!) : [['', '', '', '', ''], ['', '', '', '', ''], ['', '', '', '', ''], 
  ['', '', '', '', ''], ['', '', '', '', ''], ['', '', '', '', '']])


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

  return [words, setWords] as [string[][], React.Dispatch<React.SetStateAction<string[][]>>]
}