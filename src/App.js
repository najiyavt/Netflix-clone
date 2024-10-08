import NavBar from './Components/NavBar/NavBar';
import React from 'react';
import { action ,originals } from './urls'
import './App.css';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';

function App() {
  return (
    <div className="App">
    <NavBar/>
    <Banner/>
    <RowPost url={originals} title='Netflix Originals' />
    <RowPost url={action} title = 'Action' isSmall />
    <RowPost url={action} title = 'Action' isSmall />
    </div>
  );
}

export default App;
