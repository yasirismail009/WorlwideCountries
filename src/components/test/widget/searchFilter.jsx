import { InputAdornment, SvgIcon, TextField } from '@mui/material'
import React, { useContext } from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { ThemeContext } from '../../../App';
export default function SearchFilter(props) {
    const { isDarkMode } = useContext(ThemeContext);
    const {search,handleSearch,region,handleRegionFilter} = props
  return (
    <div className='lg:flex justify-between items-center lg:px-8 py-8'>      
        <div className={`p-2 rounded-md  ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`} >
        <SvgIcon component={SearchOutlinedIcon}/>
     <input 
          id="outlined-start-adornment"
          type="text"
          placeholder="Search for a country..."
          className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
          value={search}
          onChange={handleSearch}

        />
  </div>
  <div className={`p-2 lg:mt-0 sm:mt-4 mt-4 rounded-md lg:w-auto sm:w-40 w-40 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
    <select className={` font-semibold ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`} value={region} onChange={handleRegionFilter}>
      <option value="">All</option>
      <option value="Africa">Africa</option>
      <option value="Americas">Americas</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  </div></div>
  )
}
