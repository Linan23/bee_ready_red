import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <div className="container">
                <nav>
                <div className="logo">
                        <img src="/Bee_logo_word.png" alt="Bee Ready Logo" />
                        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <span>Bee Ready</span>
                        </Link>
                    </div>
                    <div>
                        <a href="/" id="home-link">Home</a>
                        <a href="/resources" id="resources-link">Resources</a>
                        <a href="/for-kids" id="for-kids-link">For Kids</a>
                        <button id="translate-btn" style={{ marginLeft: '1rem' }}>Translate</button>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;
