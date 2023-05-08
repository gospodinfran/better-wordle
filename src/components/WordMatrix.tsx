import * as classnames from 'classnames';

export default function WordMatrix({ word, answer }: any) {
  return (
    <div className="flex gap-2 justify-center my-2">
      {word.map((letter: any, index: any) => {
        const isCorrectLetterAndPosition = letter === answer[index];
        const isCorrectLetterWrongPosition =
          !isCorrectLetterAndPosition && answer.includes(letter);
        const isWrongLetter = !isCorrectLetterAndPosition && !isCorrectLetterWrongPosition;

        const backgroundColorClass = classnames({
          'bg-green-500': isCorrectLetterAndPosition,
          'bg-yellow-400': isCorrectLetterWrongPosition,
        });
        const noBackgroundColorClass = classnames({
          'bg-slate-50': isWrongLetter,
        });
        const noLetter = classnames({
          'bg-slate-50': !letter,
        })
        
        return (
          <div
            key={index}
            className={classnames(
              'flex',
              'justify-center',
              'items-center',
              'text-4xl',
              'font-normal',
              'p-0',
              'border',
              'shadow',
              'w-16',
              'h-16',
              backgroundColorClass,
              noBackgroundColorClass,
              noLetter,
            )}
          >
            {letter.toUpperCase()}
          </div>
        );
      })}
    </div>
  );
}
