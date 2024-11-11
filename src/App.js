import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Resources from './components/Resources';
import ForKids from './components/ForKids';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/resources" element={<Resources />} />
                    <Route path="/for-kids" element={<ForKids />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;