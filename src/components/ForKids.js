import React from 'react';
import './ForKids.css';

const ForKids = () => {
    return (
        <main>
            <div className="container">
                <h1>Activities for Kids</h1>
                <div className="activities">
                    <div className="activity">
                        <h2>Memory Game</h2>
                        <p>Improve your memory with this fun card-matching game.</p>
                        <button>Play Now</button>
                    </div>
                    {/* Repeat activities as needed */}
                </div>
            </div>
        </main>
    );
};

export default ForKids;