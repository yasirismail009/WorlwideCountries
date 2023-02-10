import { createContext, useState } from 'react';
import './App.css';
import Test from './components/test/test'
import Header from './components/test/widget/header';


export const ThemeContext = createContext();
function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };
  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
    <div className={`App h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-slate-50 text-gray-900'}`}>
    <Header handleToggleSwitch={toggleDarkMode}/>
     <Test/>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
