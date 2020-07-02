import React from 'react';
import { Route, Link } from "react-router-dom";
import Navbar from './Navbar'
import GetAmiibo from './GetAmiibo'
import Explore from './Explore'
import Movie from "./Movie"
import './App.css';

function App() {
  return (
    <>
      <header>
        <h1>Amiibo Hub</h1>
        <nav>
          <Link to="/home">Home</Link>
          <Navbar />
          <Link to="/movie">Trailer</Link>
        </nav>
      </header>
    
      <main>
        <Route path="/home">
          <GetAmiibo />
        </Route>
       
        <Route path= "/movie">
          <Movie />
        </Route>
      </main>

      <footer>
        <Explore />
      </footer>
    </>
  );
}

export default App;
