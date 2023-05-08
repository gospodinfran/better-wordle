import SettingsIcon from '@mui/icons-material/Settings';
import MenuIcon from '@mui/icons-material/Menu';
import BasicSettings from './BasicSettings';

export default function Header() {

    return (
        <div className='flex justify-between p-4 border border-gray-300 mb-16'>

        <MenuIcon fontSize='large' className='hover:cursor-pointer ml-2' />
        <h1 className="font-mono text-3xl font-semibold">Wordle</h1>
        <BasicSettings>
        <SettingsIcon fontSize='large' className='hover:cursor-pointer mr-2' />
        </BasicSettings>

        </div>
    )
}