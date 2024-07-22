import React from 'react';
import './App.css';
import Appbar from './Appbar';
import Footer from './Footer';
import Ourteam from './Ourteam-1';

function App() {
  return (
    <>
      <Appbar />
      <div className="App">
        <Ourteam />
      </div>
      <Footer />
    </>
  );
}

export default App;
