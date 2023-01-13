import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { CardDetails } from './components/CardDetails';
import { MostPopular } from './components/MostPopular';
import { MostPopularDetails } from './components/SearchBar';

function App() {
  return (
    <div className="App">
     <Header />
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cardDetails/:cardId' element={<CardDetails />}/>
      {/* <Route path='/MostPopularDetails/id' element={<MostPopularDetails />}/> */}
     </Routes>
     </div>
  );
}

export default App;
