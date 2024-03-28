import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Sobre from './pages/About/About';
import Contato from './pages/Contact/Contact';

const root = createRoot(document.getElementById('root'));
root.render(
    <Router>
        <App>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/contato" element={<Contato />} />
            </Routes>
        </App>
    </Router>
);
