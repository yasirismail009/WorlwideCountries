import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Card from './widget/card'
import { Grid } from "@mui/material";
import SearchFilter from "./widget/searchFilter";
import ViewMore from "./widget/viewMore";
import { ThemeContext } from '../../App';

const HomePage = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");
 

  useEffect(() => {
    axios
      .get("https://restcountries.com/v2/all")
      .then((res) => setCountries(res.data));
  }, []);

  useEffect(() => {
    setFilteredCountries(
      countries.filter((country) => {
        return (
          country.name.toLowerCase().includes(search.toLowerCase()) &&
          (region === "" || country.region === region)
        );
      })
    );
  }, [countries, search, region]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleRegionFilter = (e) => {
    setRegion(e.target.value);
  };

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
  };

  const handleBackClick = () => {
    setSelectedCountry(null);
  };



  return (
    <div>
   
 <div  className={`lg:px-20 sm:px-4 px-4 ${isDarkMode ? 'bg-gray-900' : 'bg-slate-50'}`}>
      {selectedCountry ? (
        <ViewMore selectedCountry={selectedCountry} handleBackClick={handleBackClick} countries={countries}/>
        ) : (
          <div>
        <SearchFilter search={search} handleSearch={handleSearch} region={region} handleRegionFilter={handleRegionFilter}/>
        <Grid container spacing={4}>
          {filteredCountries.map((country) => (
            <Grid item lg={3} md={6} xs={12}
              key={country.alpha3Code}
              onClick={() => handleCountryClick(country)}
            >
                 <Card country={country}/>
             
            </Grid>
          ))}
        </Grid>
     </div> )
      }
    </div> 
    </div>
  );
};

export default HomePage;
