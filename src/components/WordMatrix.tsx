import Droppable from "./DragNDrop/droppable";

interface WordMatrixProps {
  darkTheme: boolean;
  word: string[];
  answer: string;
  setCompleted: React.Dispatch<React.SetStateAction<boolean>>;
  droppable: boolean;
  parentKeys: string[];
}

export default function WordMatrix({ darkTheme, word, answer, setCompleted, droppable, parentKeys }: WordMatrixProps) {
  let score = 0

  return (
    <div className="flex gap-2 justify-center my-2">
      {word.map((letter: string, index: number) => {
        letter = letter.toLowerCase()
        letter == answer[index] ? score += 1 : ''
        score === 5 ? setCompleted(true) : ''

        const isCorrectLetterAndPosition = letter == answer[index]
        const isCorrectLetterWrongPosition =
          !isCorrectLetterAndPosition && answer.includes(letter) && letter !== ''
        const isWrongLetter = !isCorrectLetterAndPosition && !isCorrectLetterWrongPosition;


        const backgroundColorClass = 
        `flex justify-center items-center text-4xl lg:text-5xl font-normal p-0 w-12 h-12 md:w-14 md:h-14 xl:w-[60px] xl:h-[60px] ${darkTheme ? 'text-white' : 'border shadow'} 
        ${isCorrectLetterAndPosition ? 'bg-green-600 ' : ''}
        ${isCorrectLetterWrongPosition ? 'bg-yellow-500 ' : ''}
        ${isWrongLetter && darkTheme ? 'bg-[#303030]' : 
        isWrongLetter && !darkTheme ? 'bg-gray-300' : ''
        } 
        ${
          (letter === '' || !letter) && darkTheme ? 'bg-[#1b1a1a]' : 
          (letter === '' || !letter) && !darkTheme ? 'bg-slate-50' : ''
        }`

        if (droppable) {
          return (
            <Droppable
              id={`${letter}${index}`}
              key={`${letter}${index}`}
              classes={`flex justify-center items-center text-4xl lg:text-5xl font-normal p-0 w-12 h-12 md:w-14 md:h-14 xl:w-[60px] xl:h-[60px] ${darkTheme ? '' : 'border-2  border-gray-300'} rounded-lg hover:cursor-pointer select-none touch-none bg-white`}
            >
              {/*If droppable, won't have letter. Only parent.*/}
              { parentKeys[index] !== '' ? parentKeys[index].toUpperCase()
              : 'yo'}
            </Droppable>
          )
        } else {
          return (
            <div
              key={`${letter}${index}`}
              className={backgroundColorClass}
            >
              {letter.toUpperCase()}
            </div>
          )
        }
        
      })}
    </div>
  );
}
