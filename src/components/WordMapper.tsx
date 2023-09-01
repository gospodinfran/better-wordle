import WordMatrix from "./WordMatrix";


export interface WordMapperProps {
    darkTheme: boolean;
    words: string[][];
    answer: string;
    setCompleted: React.Dispatch<React.SetStateAction<boolean>>;
    curRow: number;
    parentKeys: string[];
}

export default function WordMapper({ darkTheme, words, answer, setCompleted, curRow, parentKeys }: WordMapperProps) {

    return (<div className="mt-[10vh]">
        { words.map((word: string[], index: number) => {
            return <WordMatrix
            key={index}
            darkTheme={darkTheme}
            word={word}
            answer={answer}
            setCompleted={setCompleted}
            droppable={index === curRow ? true : false}
            parentKeys={parentKeys}
            />
          }) }
          </div>
    )
}