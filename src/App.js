import React from 'react'
import { Outlet } from 'react-router-dom';
import NavBAr from './pages/nav-bar/NavBAr';

import './styles.css';

const App = () => {
  return (
    <>
      <NavBAr />
      <Outlet />
    </>
  )
}

export default App