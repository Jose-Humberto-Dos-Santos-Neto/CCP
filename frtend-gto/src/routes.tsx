import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Principal from './pages/principal';

const App = () => {
  return (
    <Router>
      {/* Envolve os componentes que precisam acessar o contexto de comentários com CommentProvider */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/principal" element={<Principal />} />
        </Routes>
    </Router>
  );
};

export default App;
