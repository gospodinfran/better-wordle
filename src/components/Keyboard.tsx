export default function Keyboard({ answer, words, setUserForm}: 
    {answer: string, words: string[][], setUserForm: React.Dispatch<React.SetStateAction<string>>}) {
    // First row of the QWERTY keyboard
    const firstRow: string[] = [
        "q", "w", "e", "r", "t", "y", "u", "i", "o", "p"
    ]
  
    // Second row
    const secondRow: string[] = [
        "a", "s", "d", "f", "g", "h", "j", "k", "l"
    ]
  
  // Third row
    const thirdRow: string[] = [
        "z", "x", "c", "v", "b", "n", "m"
    ]

    function getKeyColor(letter: string) {
        let color = 'white'
      
        for (const word of words) {
          for (let i = 0; i < word.length; i++) {
            if (letter === word[i].toUpperCase()) {
              if (letter === answer[i]) {
                color = 'green'
              } else if (answer?.includes(letter)) {
                color = 'yellow'
              } else {
                color = 'slate'
              }
              break
            }
          }
        }
      
        return color
      }

    function onButtonClick(letter: string) {
      setUserForm(prev => {
        if (prev.length < 5) 
        {
          return prev.concat(letter)
        } else {
          return prev
        }
      })
    }
      

    return (
        <div className="flex justify-center">
            <div className="flex flex-col gap-2 justify-center my-2">
            <div className="flex justify-center gap-2">
            {firstRow.map((letter, index) => {
  const color = getKeyColor(letter.toUpperCase())
  return (
    <div
      key={index}
      onClick={() => onButtonClick(letter)}
      className={`
      flex justify-center items-center font-normal p-0 border border-slate-300 w-12 h-12 hover:cursor-pointer 
      ${
        color === 'green' ? 'bg-green-500' :
        color === 'yellow' ? 'bg-yellow-300' :
        color === 'slate' ? 'bg-slate-300' : 'bg-white'}`}
    >
      {letter.toUpperCase()}
    </div>
  )
})}

            </div>

            <div className="flex justify-center gap-2">
            {secondRow.map((letter, index) => {
  const color = getKeyColor(letter.toUpperCase())
  return (
    <div
      key={index}
      onClick={() => onButtonClick(letter)}
      className={`flex justify-center items-center font-normal p-0 border border-slate-300 w-12 h-12 hover:cursor-pointer ${
        color === 'green' ? 'bg-green-500' :
        color === 'yellow' ? 'bg-yellow-300' :
        color === 'slate' ? 'bg-slate-300' : 'bg-white'}`}
    >
      {letter.toUpperCase()}
    </div>
  )
})}

            </div>

            <div className="flex justify-center gap-2">
            {thirdRow.map((letter, index) => {
  const color = getKeyColor(letter.toUpperCase())
  return (
    <div
      key={index}
      onClick={() => onButtonClick(letter)}
      className={`flex justify-center items-center font-normal p-0 border border-slate-300 w-12 h-12 hover:cursor-pointer ${
        color === 'green' ? 'bg-green-500' :
        color === 'yellow' ? 'bg-yellow-300' :
        color === 'slate' ? 'bg-slate-300' : 'bg-white'}`}
    >
      {letter.toUpperCase()}
    </div>
  )
})}

            </div>

        </div>
        </div>
    )
}