import SettingsIcon from '@mui/icons-material/Settings';
//import MenuIcon from '@mui/icons-material/Menu';
import BasicSettings from './BasicSettings';

export default function Header({ darkTheme, setDarkTheme }: { darkTheme: boolean, setDarkTheme:  React.Dispatch<React.SetStateAction<boolean>> }) {

    return (
        <div className={`${darkTheme ? 'text-white' : ''} flex justify-between items-center p-3 border-b border-gray-200 mb-10 text-5xl`}>

        {/*<MenuIcon fontSize='inherit' className='hover:cursor-pointer ml-2
         hover:bg-slate-100 p-1 rounded-lg' />*/}
        <h1 className={`font-mono text-3xl font-semibold ml-3`}>Wordle</h1>
        <div className='mr-3'>
            <BasicSettings setTheme={setDarkTheme}>
            <SettingsIcon fontSize='inherit' className='hover:cursor-pointer mr-2 
            hover:bg-slate-100 p-1 rounded-lg' />
            </BasicSettings>
        </div>
        </div>
    )
}