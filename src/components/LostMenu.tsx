interface VictoryMenuProps {
    show: boolean;
    word: string;
}

export default function LostMenu({ show, word }: VictoryMenuProps) {
  return (
    <>
      {show && (
        <div className="fixed inset-0 flex items-center justify-center">
        <h1 className="text-center text-3xl font-bold text-white bg-gray-500 px-6 py-8  mb-12 rounded-md shadow-lg">
            The correct word was: {word.toUpperCase()}
        </h1>
      </div>
      )}
    </>
  );
}
