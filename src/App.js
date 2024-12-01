import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Resources from './components/Resources';
import ForKids from './components/ForKids';
import './styles.css'; 

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/for-kids" element={<ForKids />} />
            </Routes>
        </Router>
    );
}

export default App;