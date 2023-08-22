
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import DrinkingGame from './components/DrinkingGame';


function App() {
  return (
    <div className ="App">
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/homepage' element={<Homepage />} />
        <Route path='/drinking_game' element={<DrinkingGame />} />
      </Routes>
    </div>
  );
}

export default App;
