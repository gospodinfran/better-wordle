import WordMatrix from "./WordMatrix";


export interface WordMapperProps {
    darkTheme: boolean;
    words: string[][];
    answer: string;
    setCompleted: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function WordMapper({ darkTheme, words, answer, setCompleted }: WordMapperProps) {

    return (<>
        { words.map((word: string[], index: number) => {
            return <WordMatrix
            key={index}
            darkTheme={darkTheme}
            word={word}
            answer={answer}
            setCompleted={setCompleted}
            />
          }) }
          </>
    )
}