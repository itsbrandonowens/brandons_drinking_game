import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import DrinkingGame from './components/DrinkingGame';
import IndexPage from './components/IndexPage';
import CardDetails from './components/CardDetails';
import ReactGA from 'react-ga';
import { useEffect, } from 'react';
import { useLocation } from 'react-router-dom';
ReactGA.initialize('G-9J3FRLZPM3');

function App() {
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  const scrollLock = () => {
    document.body.style.overflow = 'hidden';
  }

  scrollLock();

  return (
    <div className="App">
    
      <Routes>
        <Route path='/' element={<IndexPage />} />
        <Route path='/brandons_drinking_game' element={<Homepage />} />
        <Route path='/homepage' element={<Homepage />} />
        <Route path='/drinking_game' element={<DrinkingGame />} />
        <Route path='/card_details' element={<CardDetails />} />
      </Routes>

    </div>
  );
}

export default App;


