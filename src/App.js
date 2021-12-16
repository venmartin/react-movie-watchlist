import React from 'react'
import Navbar from './components/Navbar';
import Dock from './components/Dock'
import './App.css'
import './components/ModalBtnStyle.css'

import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material';
import Trending from './Pages/Trending/Trending'
import Movies from './Pages/Movies/Movies'
import Series from './Pages/Series/Series'
import Search from './Pages/Search/Search'
import Favorites from './Pages/Favorites/Favorites';
import About from './Pages/About/About'
import Watchlist from './Pages/Watchlist/Watchlist'

function App() {

const tmdb = 'https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg'

  return (
    <>
    
    <CssBaseline />
    <BrowserRouter>
    <Navbar />
      <div className="App">
        <Container>
          <div className='splash'>
            <span className='splash-heading'>Powered by <a href='https://www.themoviedb.org/' target='_blank'><img src={tmdb}></img></a>
            </span>
          </div>
          <Routes>
            <Route exact path='/trending' element={<Trending />}></Route>
            <Route path='/movies' element={<Movies/>}></Route>
            <Route path='/series' element={<Series />}></Route>
            <Route path='/search' element={<Search />}></Route>
            <Route path='/wlist' element={<Watchlist />}></Route>
            <Route path='/fav' element={<Favorites />}></Route>
            <Route path='/about' element={<About />}></Route>
          </Routes>
        </Container>
      </div>
      <Dock className='dock'/>
    </BrowserRouter>
    </>
  );
}

export default App;
