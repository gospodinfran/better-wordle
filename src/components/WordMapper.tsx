import WordMatrix from './WordMatrix';

export interface WordMapperProps {
  darkTheme: boolean;
  words: string[][];
  answer: string;
  setCompleted: React.Dispatch<React.SetStateAction<boolean>>;
  curRow: number;
  guessForm: string[];
  setGuessForm: React.Dispatch<React.SetStateAction<string[]>>;
  shake: boolean;
}

export default function WordMapper({
  darkTheme,
  words,
  answer,
  setCompleted,
  curRow,
  guessForm,
  setGuessForm,
  shake,
}: WordMapperProps) {
  return (
    <div className="mt-[6vh] md:mt-[10vh]">
      {words.map((word: string[], index: number) => {
        return (
          <WordMatrix
            key={index}
            darkTheme={darkTheme}
            word={word}
            answer={answer}
            setCompleted={setCompleted}
            droppable={index === curRow ? true : false}
            guessForm={guessForm}
            setGuessForm={setGuessForm}
            shake={shake}
          />
        );
      })}
    </div>
  );
}
