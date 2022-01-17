import React, {useState, useMemo, useEffect} from 'react';
import '../src/App.css'
import { BrowserRouter, Route, Link, Switch, Redirect} from 'react-router-dom';

import Navbar from './components/UI/Navbar/Navbar';
import AppRouter from './components/AppRouter';

function App() {
  return (

    <BrowserRouter>
        <Navbar />
        <AppRouter />
    </BrowserRouter>
  )
}

export default App;