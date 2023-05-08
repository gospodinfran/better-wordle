import WordMatrix from "./WordMatrix"

export interface WordMapperProps {
    words: string[][];
    answer: string;
    setCompleted: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function WordMapper({ words, answer, setCompleted }: WordMapperProps) {

    return (<>
        { words.map((word: string[], index: number) => {
            return <WordMatrix
            key={index}
            word={word}
            answer={answer}
            setCompleted={setCompleted}
            />
          }) }
          </>
    )
}