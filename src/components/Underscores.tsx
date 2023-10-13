import LetterHangman from './LetterHangman';

export default function Underscores({
  darkTheme,
  userForm,
}: {
  darkTheme: boolean;
  userForm: string[];
}) {
  const repeated = Array.from(userForm, (letter, index) => (
    <LetterHangman index={index} letter={letter} />
  ));

  return (
    <div
      className={`flex justify-center items-center gap-16 mt-12 ${
        darkTheme ? 'text-white' : ''
      }`}
    >
      {repeated}
    </div>
  );
}
