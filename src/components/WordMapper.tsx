import WordMatrix from "./WordMatrix"

export interface WordMapperProps {
    words: string[][];
    answer: string;
}

export default function WordMapper({ words, answer}: WordMapperProps) {

    return (<>
        { words.map((word: string[], index: number) => {
            return <WordMatrix
            key={index}
            word={word}
            answer={answer}
            />
          }) }
          </>
    )
}