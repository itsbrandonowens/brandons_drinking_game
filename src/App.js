
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import DrinkingGame from './components/DrinkingGame';
import Rules from './components/Rules';




function App() {
  const scrollLock = () => {
    document.body.style.overflow = 'hidden';
   }

   scrollLock();
  
  return (
    <div className ="App">
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/brandons_drinking_game' element={<Homepage/>} />
        <Route path='/homepage' element={<Homepage />} />
        <Route path='/drinking_game' element={<DrinkingGame />} />
        <Route path='/rules' element={<Rules />} />

       
      </Routes>
    </div>
  );
}

export default App;
