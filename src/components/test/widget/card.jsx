import * as React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { CardContent } from '@mui/material';
import { ThemeContext } from '../../../App';


export default function RecipeReviewCard(props) {
    const { isDarkMode } = React.useContext(ThemeContext);
    const {country} = props;
    // #1F2937
  return (
    <Card sx={{ maxWidth: 345, backgroundColor:isDarkMode ? "#1F2937":"#fff", color:isDarkMode ? "#fff":"#1F2937" }}   >
        <div className='flex justify-center items-center'>
        <img
        className='max-h-40'
        component="img"
        src={country.flag}
        alt={`Flag of ${country.name}`}
      />
        </div>
      
      <CardContent>
        <Typography variant="body2" >
        {country.name}
        </Typography>
        <Typography variant="body2" >
        <strong>Population:</strong>{" "}
      {country.population.toLocaleString()}
        </Typography>
        <Typography variant="body2" >
        <strong>Region:</strong> {country.region}
        </Typography>
        <Typography variant="body2" >
        <strong>Capital:</strong> {country.capital}
        </Typography>
      </CardContent>
    </Card>
  );
}
