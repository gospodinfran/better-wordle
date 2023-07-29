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
        <div className="flex justify-center md:mt-6 lg:mt-8 xl:mt-12">
            <div className="flex flex-col gap-2 justify-center my-2">
            <div className="flex justify-center gap-2">
            {firstRow.map((letter, index) => {
  const color = getKeyColor(letter.toUpperCase())
  return (
    <div
      key={index}
      onClick={() => onButtonClick(letter)}
      className={`
      flex justify-center items-center font-normal p-0 border border-slate-300 w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 hover:cursor-pointer 
      ${
        color === 'green' ? 'bg-green-600' :
        color === 'yellow' ? 'bg-yellow-400' :
        color === 'slate' ? 'bg-gray-300' : 'bg-white'}`}
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
      className={`flex justify-center items-center font-normal p-0 border border-slate-300 w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 hover:cursor-pointer ${
        color === 'green' ? 'bg-green-600' :
        color === 'yellow' ? 'bg-yellow-400' :
        color === 'slate' ? 'bg-gray-300' : 'bg-white'}`}
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
      className={`flex justify-center items-center font-normal p-0 border border-slate-300 w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 hover:cursor-pointer ${
        color === 'green' ? 'bg-green-600' :
        color === 'yellow' ? 'bg-yellow-400' :
        color === 'slate' ? 'bg-gray-300' : 'bg-white'}`}
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