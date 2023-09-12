import { useEffect, useState } from "react";

export default function useLocalStorage(setState: React.Dispatch<React.SetStateAction<number>> | null, populateState=false, localStorageItem='words') {
    const [words, setWords] = useState<string[][]>(() => 
  localStorage.getItem(localStorageItem) ? JSON.parse(localStorage.getItem('words')!) : [['', '', '', '', ''], ['', '', '', '', ''], ['', '', '', '', ''], 
  ['', '', '', '', ''], ['', '', '', '', ''], ['', '', '', '', '']])


  useEffect(() => {
    localStorage.setItem('words', JSON.stringify(words))

    if (!populateState)
      return
    let populatedState = 0
    for (let i = 0; i < 6; i++) {
      if (words[i][0] == '') {
        break
      }
      populatedState++
    }
    if (setState)
      setState(populatedState)
  }, [words])

  return [words, setWords] as [string[][], React.Dispatch<React.SetStateAction<string[][]>>]
}