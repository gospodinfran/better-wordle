import Draggable from "./DragNDrop/draggable"

interface Props {
  darkTheme: boolean;
  answer: string;
  words: string[][];
  onFormSubmit: (e?: any) => Promise<void>;
  onKeyClick: (letter: string) => void;
  onDeleteKey: () => void;
}

export default function Keyboard({darkTheme, answer, words, onFormSubmit, onKeyClick, onDeleteKey}: Props) {
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

    answer = answer.toUpperCase()

    function getKeyColor(letter: string) {
      let color = 'white'
    
      for (const word of words) {
        for (let i = 0; i < word.length; i++) {
          if (letter === word[i].toUpperCase()) {
            if (letter === '')
              return
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

    return (
        <div className="flex justify-center mt-[6vh] md:mt-[8vh] font-bold">
            <div className="flex flex-col gap-[5px] md:gap-2 justify-center my-2">
            <div className="flex justify-center gap-[5px] md:gap-2 ">
            {firstRow.map((letter, index) => {
  const color = getKeyColor(letter.toUpperCase())
  return (
    <Draggable
  id={letter}
  key={letter+index}
  onClick={() => onKeyClick(letter)}
  classes={`flex justify-center items-center md:text-xl ${darkTheme ? '' : 'border-2  border-gray-300'} rounded md:rounded-md p-0 w-[8.5vw] h-[11vw] md:w-12 md:h-[60px] hover:cursor-pointer select-none touch-none ${
    color === 'green' ? 'bg-green-600' :
    color === 'yellow' ? 'bg-yellow-500' :
    color === 'slate' ? 'bg-gray-300' : 'bg-[#ededed]'}`}
>
  {letter.toUpperCase()}
</Draggable>
  )
})}

            </div>

            <div className="flex justify-center gap-[5px] md:gap-2">
            {secondRow.map((letter, index) => {
  const color = getKeyColor(letter.toUpperCase())
  return (
    <Draggable
      id={letter}
      key={letter+index}
      onClick={() => onKeyClick(letter)}
      classes={`flex justify-center items-center md:text-xl ${darkTheme ? '' : 'border-2  border-gray-300'} rounded md:rounded-md p-0 w-[8.5vw] h-[11vw] md:w-12 md:h-[60px] hover:cursor-pointer select-none touch-none ${
        color === 'green' ? 'bg-green-600' :
        color === 'yellow' ? 'bg-yellow-400' :
        color === 'slate' ? 'bg-gray-300' : 'bg-[#ededed]'}`}
    >
      {letter.toUpperCase()}
    </Draggable>
  )
})}

            </div>

            <div className="flex justify-center gap-[5px] md:gap-2">
              <div 
              onClick={onFormSubmit}
              className={`flex justify-center items-center font-medium text-sm ${darkTheme ? '' : 'border-2  border-gray-300'}rounded md:rounded-md p-0 w-[12vw] h-[11vw] md:w-[68px] md:h-[60px] hover:cursor-pointer select-none bg-[#ededed]`}>
              ENTER
              </div>
            {thirdRow.map((letter, index) => {
  const color = getKeyColor(letter.toUpperCase())
  return (
    <Draggable
      id={letter}
      key={letter+index}
      onClick={() => onKeyClick(letter)}
      classes={`flex justify-center items-center md:text-xl ${darkTheme ? '' : 'border-2  border-gray-300'} rounded md:rounded-md p-0 w-[8.5vw] h-[11vw] md:w-12 md:h-[60px] hover:cursor-pointer select-none touch-none ${
        color === 'green' ? 'bg-green-600' :
        color === 'yellow' ? 'bg-yellow-400' :
        color === 'slate' ? 'bg-gray-300' : 'bg-[#ededed]'}`}
    >
      {letter.toUpperCase()}
    </Draggable>
  )
})}

  <div 
  onClick={() => onDeleteKey()}
  className={`flex justify-center items-center text-lg md:text-xl ${darkTheme ? '' : 'border-2  border-gray-300'} rounded md:rounded-md p-0 w-[12vw] h-[11vw] md:w-[68px] md:h-[60px] hover:cursor-pointer select-none bg-[#ededed]`}>
              ⌫
              </div>
            </div>

        </div>
        </div>
    )
}