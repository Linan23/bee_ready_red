import React, { useState } from 'react';
import './Header.css';

const Header = () => {
    const [isSpanish, setIsSpanish] = useState(false);

    const handleTranslateClick = () => {
        setIsSpanish(!isSpanish);
    };

    return (
        <header>
            <div className="container">
                <nav>
                    <div className="logo">
                        <img src="placeholder.svg" alt="Bee Ready Logo" />
                        <span>Bee Ready</span>
                    </div>
                    <div>
                        <a href="/" id="home-link">{isSpanish ? 'Inicio' : 'Home'}</a>
                        <a href="/resources" id="resources-link">{isSpanish ? 'Recursos' : 'Resources'}</a>
                        <a href="/for-kids" id="for-kids-link">{isSpanish ? 'Para Niños' : 'For Kids'}</a>
                        <button id="translate-btn" onClick={handleTranslateClick}>
                            {isSpanish ? 'English' : 'Translate'}
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;