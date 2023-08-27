import Draggable from "./DragNDrop/draggable"

export default function Keyboard({darkTheme, answer, words, hangmanForm, setHangman}: 
    {darkTheme: boolean, answer: string, words: string[][], hangmanForm: string[], setHangman: React.Dispatch<React.SetStateAction<string[]>>}) {
    // First row of the QWERTY keyboard
    const firstRow: string[] = [
        "q", "w", "e", "r", "t", "y", "u", "i", "o", "p"
    ]
  
    const secondRow: string[] = [
        "a", "s", "d", "f", "g", "h", "j", "k", "l"
    ]
  
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
      if (hangmanForm.includes('')) {
        const emptyIndex = hangmanForm.findIndex(ele => ele === '')
        const cpy = [...hangmanForm]
        cpy[emptyIndex] = letter
        setHangman(cpy)
      }
    }

    function handleSubmitClick() {
      return
    }

    function handleDeleteClick() {
      return
    }
      

    return (
        <div className="flex justify-center mt-[10vh]">
            <div className="flex flex-col gap-2 justify-center my-2">
            <div className="flex justify-center gap-2">
            {firstRow.map((letter, index) => {
  const color = getKeyColor(letter.toUpperCase())
  return (
    <Draggable
      id={letter}
      key={index}
      onClick={() => onButtonClick(letter)}
      classes={`flex justify-center items-center font-medium md:text-xl ${darkTheme ? '' : 'border-2  border-gray-300'} rounded-lg p-0 w-[7.5vw] h-[7vw] md:w-12 md:h-14 hover:cursor-pointer select-none ${
        color === 'green' ? 'bg-green-600' :
        color === 'yellow' ? 'bg-yellow-400' :
        color === 'slate' ? 'bg-gray-300' : 'bg-white'}`}
    >
      {letter.toUpperCase()}
    </Draggable>
  )
})}

            </div>

            <div className="flex justify-center gap-2">
            {secondRow.map((letter, index) => {
  const color = getKeyColor(letter.toUpperCase())
  return (
    <Draggable
      id={letter}
      key={index}
      onClick={() => onButtonClick(letter)}
      classes={`flex justify-center items-center font-medium md:text-xl ${darkTheme ? '' : 'border-2  border-gray-300'} rounded-lg p-0 w-[7.5vw] h-[7vw] md:w-12 md:h-14 hover:cursor-pointer select-none ${
        color === 'green' ? 'bg-green-600' :
        color === 'yellow' ? 'bg-yellow-400' :
        color === 'slate' ? 'bg-gray-300' : 'bg-white'}`}
    >
      {letter.toUpperCase()}
    </Draggable>
  )
})}

            </div>

            <div className="flex justify-center gap-2">
              <div 
              onClick={handleSubmitClick}
              className={`flex justify-center items-center font-medium text-sm ${darkTheme ? '' : 'border-2  border-gray-300'} rounded-lg p-0 w-[9vw] h-[7vw] md:w-[68px] md:h-14 hover:cursor-pointer select-none bg-white`}>
              ENTER
              </div>
            {thirdRow.map((letter, index) => {
  const color = getKeyColor(letter.toUpperCase())
  return (
    <Draggable
      id={letter}
      key={index}
      onClick={() => onButtonClick(letter)}
      classes={`flex justify-center items-center font-medium md:text-xl ${darkTheme ? '' : 'border-2  border-gray-300'} rounded-lg p-0 w-[7.5vw] h-[7vw] md:w-12 md:h-14 hover:cursor-pointer select-none ${
        color === 'green' ? 'bg-green-600' :
        color === 'yellow' ? 'bg-yellow-400' :
        color === 'slate' ? 'bg-gray-300' : 'bg-white'}`}
    >
      {letter.toUpperCase()}
    </Draggable>
  )
})}

  <div 
  onClick={handleDeleteClick}
  className={`flex justify-center items-center font-medium text-lg md:text-xl ${darkTheme ? '' : 'border-2  border-gray-300'} rounded-lg p-0 w-[9vw] h-[7vw] md:w-[68px] md:h-14 hover:cursor-pointer select-none bg-white`}>
              ⌫
              </div>
            </div>

        </div>
        </div>
    )
}