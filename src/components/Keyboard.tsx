export default function Keyboard({attempts, answer}: 
    {attempts: Set<string> | null, answer: string | null}) {
    // First row of the QWERTY keyboard
    const firstRow: string[] = [
        "q", "w", "e", "r", "t", "y", "u", "i", "o", "p"
    ];
  
    // Second row of the QWERTY keyboard
    const secondRow: string[] = [
        "a", "s", "d", "f", "g", "h", "j", "k", "l"
    ];
  
  // Third row of the QWERTY keyboard
    const thirdRow: string[] = [
        "z", "x", "c", "v", "b", "n", "m"
    ];

    return (
        <div className="flex justify-center">
            <div className="flex flex-col gap-2 justify-center my-2">
            <div className="flex justify-center gap-2">
            { firstRow.map((letter, index) => {
                return <div 
                key={index}
                className=
                {`flex justify-center items-center font-normal p-0 border w-12 h-12 
                ${attempts && attempts.has(letter.toUpperCase()) ? 'border-2 border-black' : ''}`}
                >
                    {letter.toUpperCase()}
                </div>
            }) }
            </div>

            <div className="flex justify-center gap-2">
            { secondRow.map((letter, index) => {
                return <div 
                key={index}
                className=
                {`flex justify-center items-center font-normal p-0 border w-12 h-12 
                ${attempts && attempts.has(letter.toUpperCase()) ? 'border-2 border-black' : ''}`}
                >
                    {letter.toUpperCase()}
                </div>
            }) }
            </div>

            <div className="flex justify-center gap-2">
            { thirdRow.map((letter, index) => {
                return <div 
                key={index}
                className=
                {`flex justify-center items-center font-normal p-0 border w-12 h-12 
                ${attempts && attempts.has(letter.toUpperCase()) ? 'border-2 border-black' : ''}`}
                >
                    {letter.toUpperCase()}
                </div>
            }) }
            </div>

        </div>
        </div>
    )
}