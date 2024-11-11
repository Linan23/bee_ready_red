import React from 'react';
import './HomePage.css';

const HomePage = () => {
    return (
        <main>
            <div className="container">
                <h1>Where Learning takes Flight</h1>
                <div className="search-container">
                    <img src="placeholder.svg" alt="Decorative Bee" style={{ transform: "scaleX(-1)" }} />
                    <form className="search-form" id="search-form">
                        <input type="search" id="search-input" placeholder="Search here" />
                        <button type="submit">Search</button>
                    </form>
                    <img src="placeholder.svg" alt="Decorative Bee" />
                </div>
                <div className="content">
                    <div className="announcements">
                        <h2>Announcements</h2>
                        <div className="announcement">
                            <h3>Add a Title</h3>
                            <p>Add paragraph text. Click "Edit Text" to update the font, size, and more.</p>
                        </div>
                        {/* Repeat announcement as needed */}
                    </div>
                    <div className="calendar">
                        <h2>November 2024</h2>
                        <p>Calendar placeholder</p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default HomePage;