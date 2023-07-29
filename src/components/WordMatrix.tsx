
interface WordMatrixProps {
  word: string[];
  answer: string;
  setCompleted: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function WordMatrix({ word, answer, setCompleted }: WordMatrixProps) {
  let score = 0

  return (
    <div className="flex gap-2 justify-center my-2">
      {word.map((letter: string, index: number) => {
        letter = letter.toUpperCase()
        letter == answer[index] ? score += 1 : ''
        score === 5 ? setCompleted(true) : ''

        const isCorrectLetterAndPosition = letter == answer[index];
        const isCorrectLetterWrongPosition =
          !isCorrectLetterAndPosition && answer.includes(letter) && letter !== '';
        const isWrongLetter = !isCorrectLetterAndPosition && !isCorrectLetterWrongPosition;

        // using classnames library. didn't work on build
        {/*const backgroundColorClass = classnames({
          'bg-green-500': isCorrectLetterAndPosition,
          'bg-yellow-300': isCorrectLetterWrongPosition,
          'bg-slate-50': isWrongLetter || letter === '' || !letter,
        })*/}

        const backgroundColorClass = 
        `flex justify-center items-center text-4xl font-normal p-0 border shadow w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 
        ${isCorrectLetterAndPosition ? 'bg-green-500 ' : ''}
        ${isCorrectLetterWrongPosition ? 'bg-yellow-300 ' : ''}
        ${isWrongLetter ? 'bg-gray-200' : ''} 
        ${letter === '' || !letter ? 'bg-slate-50' : ''}`;
        
        return (
          <div
            key={index}
            className={backgroundColorClass}
          >
            {letter.toUpperCase()}
          </div>
        );
      })}
    </div>
  );
}
