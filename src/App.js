import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage'
import PostPages from './pages/PostPages'
import About from './pages/About';
import ErrorPage from './pages/error-page/ErrorPage';

import './styles.css';

const router = createBrowserRouter([
  { path: '/', element: <HomePage />, errorElement: <ErrorPage />, },
  { path: '/posts', element: <PostPages />, errorElement: <ErrorPage />, },
  { path: '/about', element: <About />, errorElement: <ErrorPage />, }
])

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App