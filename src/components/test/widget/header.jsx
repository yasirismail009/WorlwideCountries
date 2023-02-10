import React, { useContext } from 'react'
import Brightness3OutlinedIcon from '@mui/icons-material/Brightness3Outlined';
import { SvgIcon } from '@mui/material';
import { ThemeContext } from '../../../App';


export default function Header(props) {
    const {handleToggleSwitch} = props
    const { isDarkMode } = useContext(ThemeContext);
  return (
    <div className={`flex justify-between items-center shadow-md lg:px-8 sm:px-2 px-3 py-4 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`} >
    <h1 className='lg:text-xl sm:text-base text-base font-semibold'>Where in the world?</h1> 
    <div className='flex flex-row cursor-pointer' onClick={handleToggleSwitch}>
        <SvgIcon className='lg:text-base sm:text-sm text-sm' component={Brightness3OutlinedIcon}/>
    <p className='lg:text-base sm:text-sm text-sm  font-semibold mx-1'>Dark mode</p>
  </div>
  </div>
  )
}
