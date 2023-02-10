import { Grid, SvgIcon } from '@mui/material';
import React, { useContext } from 'react'
import { ThemeContext } from '../../../App';
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';

export default function ViewMore(props) {
    const { isDarkMode } = useContext(ThemeContext);
    const {selectedCountry,handleBackClick,countries} = props
  return (
    <div className="py-4">   
    <button c className={`flex items-center justify-center px-6 font-semibold py-2 rounded-md ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`} onClick={handleBackClick}><SvgIcon className='mx-1' component={KeyboardBackspaceOutlinedIcon}/> Back</button>
    <div className=' flex pt-8'>

    <Grid container spacing={4} className="justify-center items-center">
       <Grid item lg={6} xs={12}>
        <div className='lg:p-8'>
    <img className='rounded-lg' src={selectedCountry.flag} alt={`Flag of ${selectedCountry.name}`} />
    </div>
        </Grid>
        <Grid item lg={6} xs={12}>
            <div className='text-start'>
    <h1 className='text-2xl font-bold'>{selectedCountry.name}</h1>
    <div className='py-4'>
    <Grid container spacing={2}>
    <Grid item lg={6} xs={12}>
         <p>
      <strong>Population:</strong> {selectedCountry.population.toLocaleString()}
    </p>
    </Grid>
    <Grid item lg={6} xs={12}>
    <p>
      <strong>Region:</strong> {selectedCountry.region}
    </p>
    </Grid>
    <Grid item lg={6} xs={12}>
    <p>
      <strong>Capital:</strong> {selectedCountry.capital}
    </p>
    </Grid>
    </Grid>
    </div>
    <div className='flex flex-wrap'>
      <strong className='mr-3 mb-2'>Border Countries:</strong>
      {selectedCountry.borders.map((border) => {
        const borderCountry = countries.find(
          (country) => country.alpha3Code === border
        );
        return (
          <div  className={`flex items-center justify-center font-semibold  rounded-md mr-2 mb-2 px-3 py-1 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`} key={borderCountry.alpha3Code}>
            {borderCountry.name}
          </div>
        );
      })}
    </div>
    </div>
        </Grid>
    </Grid>
   
  </div>
  </div>
  )
}
