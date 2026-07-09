import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Homepage from './components/Homepage';
import DrinkingGame from './components/DrinkingGame';
import IndexPage from './components/IndexPage';
import CardDetails from './components/CardDetails';
import ReactGA from 'react-ga';
import { useEffect } from 'react';

ReactGA.initialize('G-9J3FRLZPM3');

function App() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: location.pathname });
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, [location.pathname]);

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


