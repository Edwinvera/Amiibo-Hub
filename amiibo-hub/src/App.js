import React from 'react';
import { Route, Link } from "react-router-dom";
import Navbar from './Navbar'
import GetAmiibo from './GetAmiibo'
import Explore from './Explore'
import Tiles from "./Tiles"
import './App.css';

function App() {
  return (
    <>
      <header>
        <h1>Amiibo Hub</h1>
        <nav>
          <Navbar />
        </nav>
      </header>
    
      <main>
        <GetAmiibo />
      </main>

      <footer>
        <Explore />
        
      </footer>
    </>
  );
}

export default App;
