import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar'; // Adjusted import paths
import Home from './components/Home';       // Adjusted import paths
import Menu from './components/Menu';       // Adjusted import paths
import Reservations from './components/Reservations'; // Adjusted import paths
import Contact from './components/Contact'; // Adjusted import paths
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/reservations" element={<Reservations />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
