import React from 'react';

function Resources() {
    return (
        <main>
            <div className="container">
                <h1>Resources</h1>
                <div className="resources">
                    <div className="resource">
                        <h2>School Registration</h2>
                        <p>Information to help parents register their child for education</p>
                        <button>Learn More</button>
                    </div>
                    <div className="resource">
                        <h2>Medical Services</h2>
                        <p>Healthcare resources and clinics in your area</p>
                        <button>Learn More</button>
                    </div>
                    <div className="resource">
                        <h2>Food Services</h2>
                        <p>Information on food banks and food assistance programs</p>
                        <button>Learn More</button>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Resources;
