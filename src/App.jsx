import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthContainer from './components/AuthContainer/AuthContainer';
import ChatBox from '../ChatBox'; 
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/*" element={<AuthContainer />} /> 
          <Route path="/chat" element={<ChatBox />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
