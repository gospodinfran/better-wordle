import WordMatrix from "./WordMatrix"

export default function WordMapper({ words, answer}: any) {

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