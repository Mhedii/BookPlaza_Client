import React from 'react';
import { RouterProvider } from 'react-router';
import './App.css';
import router from './Routes/Routes/Routes';




function App() {
  return (
    <div className="App h-screen bg-rose-50 dark:bg-purple-400 dark:text-green-900 ">
      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
