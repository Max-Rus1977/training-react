import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import HomePage from './pages/HomePage'
import PostPages from './pages/PostPages'
import About from './pages/About';
import ErrorPage from './pages/error-page/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/', element: <App />, errorElement: <ErrorPage />,
    children: [
      { path: '/home', element: <HomePage />, errorElement: <ErrorPage />, },
      { path: '/posts', element: <PostPages />, errorElement: <ErrorPage />, },
      { path: '/about', element: <About />, errorElement: <ErrorPage />, }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);

