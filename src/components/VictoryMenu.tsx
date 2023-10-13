interface VictoryMenuProps {
  completed: boolean;
}

export default function VictoryMenu({ completed }: VictoryMenuProps) {
  return (
    <>
      {completed && (
        <div className="fixed inset-0 flex items-center justify-center">
          <h1 className="text-center text-3xl font-bold text-white bg-gray-500 px-6 py-8  mb-12 rounded-md shadow-lg">
            Victory!
          </h1>
        </div>
      )}
    </>
  );
}
