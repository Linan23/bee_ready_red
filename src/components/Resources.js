import React from 'react';
import './Resources.css';

const Resources = () => {
    return (
        <main>
            <div className="container">
                <h1>Resources</h1>
                <div className="resources">
                    <div className="resource">
                        <h2>School Registration</h2>
                        <p>Information on how to register your child for local schools.</p>
                        <button>Learn More</button>
                    </div>
                    {/* Repeat resources as needed */}
                </div>
            </div>
        </main>
    );
};

export default Resources;