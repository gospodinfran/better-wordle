
interface WordMatrixProps {
  darkTheme: boolean;
  word: string[];
  answer: string;
  setCompleted: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function WordMatrix({ darkTheme, word, answer, setCompleted }: WordMatrixProps) {
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

        const backgroundColorClass = 
        `flex justify-center items-center text-4xl lg:text-5xl font-normal p-0 w-12 h-12 md:w-16 md:h-16 lg:w-16 lg:h-16 ${darkTheme ? 'text-white' : 'border shadow'} 
        ${isCorrectLetterAndPosition ? 'bg-green-600 ' : ''}
        ${isCorrectLetterWrongPosition ? 'bg-yellow-500 ' : ''}
        ${isWrongLetter && darkTheme ? 'bg-[#303030]' : 
        isWrongLetter && !darkTheme ? 'bg-gray-300' : ''
        } 
        ${
          (letter === '' || !letter) && darkTheme ? 'bg-[#1b1a1a]' : 
          (letter === '' || !letter) && !darkTheme ? 'bg-slate-50' : ''
        }`
        
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
