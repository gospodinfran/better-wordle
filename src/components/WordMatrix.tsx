
interface WordMatrixProps {
  word: string[];
  answer: string;
}

export default function WordMatrix({ word, answer }: WordMatrixProps) {

  return (
    <div className="flex gap-2 justify-center my-2">
      {word.map((letter: string, index: number) => {
        const isCorrectLetterAndPosition = letter == answer[index];
        const isCorrectLetterWrongPosition =
          !isCorrectLetterAndPosition && answer.includes(letter) && letter !== '';
        const isWrongLetter = !isCorrectLetterAndPosition && !isCorrectLetterWrongPosition;

        {/*const backgroundColorClass = classnames({
          'bg-green-500': isCorrectLetterAndPosition,
          'bg-yellow-300': isCorrectLetterWrongPosition,
          'bg-slate-50': isWrongLetter || letter === '' || !letter,
        })*/}

        const backgroundColorClass = 
        `flex justify-center items-center text-4xl font-normal p-0 border shadow w-16 h-16 
        ${isCorrectLetterAndPosition ? 'bg-green-500 ' : ''}
        ${isCorrectLetterWrongPosition ? 'bg-yellow-300 ' : ''}
        ${isWrongLetter || letter === '' || !letter ? 'bg-slate-50' : ''}`;

        
        
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
