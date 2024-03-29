import SettingsIcon from '@mui/icons-material/Settings';
import MenuIcon from '@mui/icons-material/Menu';
import BasicSettings from './BasicSettings';
import LeftMenu from './LeftMenu';

export default function Header({
  darkTheme,
  setDarkTheme,
}: {
  darkTheme: boolean;
  setDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div
      className={`${
        darkTheme ? 'text-white' : ''
      } font-lora flex justify-between items-center p-3 border-b border-zinc-300 mb-10 text-3xl md:text-4xl`}
    >
      <LeftMenu>
        <MenuIcon
          fontSize="inherit"
          className="hover:cursor-pointer ml-2
                hover:bg-gray-700 p-1 rounded-lg"
        />
      </LeftMenu>
      <h1 className="text-2xl md:text-4xl font-light">
        <span className="text-xl md:text-2xl">(better) </span>
        Wordle
      </h1>
      <div className="mr-3">
        <BasicSettings setTheme={setDarkTheme}>
          <SettingsIcon
            fontSize="inherit"
            className="hover:cursor-pointer mr-2
                    hover:bg-gray-700 p-1 rounded-lg"
          />
        </BasicSettings>
      </div>
    </div>
  );
}
