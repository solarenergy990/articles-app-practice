import React from 'react';
import Header from '../Header/Header';
import Home from '../../pages/Home/Home';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <div>
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        <Route />
        <Route />
      </Routes>
    </>
  );
}

export default App;
