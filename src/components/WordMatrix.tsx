
export default function WordMatrix({ word }: any) {

    return (
        <div className="flex gap-2 justify-center my-2">
            { word.map((letter: any, index: any) => {
                return (
                    <div
                key={index}
                className="flex justify-center items-center text-4xl font-normal p-0 border shadow w-16 h-16" 
                >
                    {letter.toUpperCase()}
                </div>
                )
            }) }
        </div>
    )
}