import { Menu } from '@headlessui/react'
import { ReactNode } from 'react'


export default function BasicSettings({ children, setTheme }: { children: ReactNode, setTheme: React.Dispatch<React.SetStateAction<boolean>>}) {

  return (
    <Menu>
      <Menu.Button>{children}</Menu.Button>
      <Menu.Items className="absolute right-0 mt-6 w-44 mr-[27px] origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className='px-1 py-1'>
        <Menu.Item>
          {({ active }) => (
            <button onClick={() => setTheme(prev => !prev)}
            className={`${
              active ? 'bg-violet-500 text-white' : 'text-gray-900'
            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-4">
                <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
              </svg>
            Switch Theme
          </button>
          )}
        </Menu.Item>
        </div>
      </Menu.Items>
    </Menu>
  )
}