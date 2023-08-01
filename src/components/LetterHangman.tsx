export default function LetterHangman({ letter, index }: { index: number, letter:string,}) {

    return (
        <div 
        key={index}
        className="underline text-4xl"
        >
            { letter ? 
            <p>
                &#160;{letter.toUpperCase()}&#160;
            </p>
             :
            <p>&#160;&#160;&#160;&#160;&#160;</p>
            }
        </div>
    )
}