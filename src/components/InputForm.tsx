export default function InputForm({ value, onChange, onSubmit }: { value: any, onChange: (e: any) => void, onSubmit: any }) {

    return(
        <form onSubmit={onSubmit} className="mt-6 flex justify-center">
            <input type="text" value={value.toUpperCase()} autoFocus={true}
            className="block w-52 rounded-md border-0 py-3 px-5 text-gray-900 ring-1 
            ring-inset ring-gray-300 placeholder:text-gray-500 text-xl
            focus:outline-none sm:text-sm sm:leading-6
            placeholder:text-sm" 
            placeholder="Make your guess." 
            onChange={onChange}/>
        </form>
    )
}