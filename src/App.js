import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import 'antd/dist/antd.css';
import { Route, Routes } from 'react-router-dom';
import AdminLayout from './pages/layouts/AdminLayout';
function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='admin' element={<AdminLayout />}/>
        </Routes>
    </div>
  );
}

export default App;
