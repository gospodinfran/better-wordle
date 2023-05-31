import SettingsIcon from '@mui/icons-material/Settings';
import MenuIcon from '@mui/icons-material/Menu';
import BasicSettings from './BasicSettings';

export default function Header() {

    return (
        <div className='flex justify-between items-center p-3 border-b border-gray-200 mb-10 text-5xl'>

        <MenuIcon fontSize='inherit' className='hover:cursor-pointer ml-2
         hover:bg-slate-100 p-1 rounded-lg' />
        <h1 className="font-mono text-3xl font-semibold">Wordle</h1>
        <BasicSettings>
        <SettingsIcon fontSize='inherit' className='hover:cursor-pointer mr-2 
         hover:bg-slate-100 p-1 rounded-lg' />
        </BasicSettings>

        </div>
    )
}