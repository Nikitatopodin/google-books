import React, { useEffect } from 'react';
import './App.css';
import router from './utils/router/Router';
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
