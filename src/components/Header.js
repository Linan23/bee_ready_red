import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Header() {
    // Translation Feature
    const [currentLanguage, setCurrentLanguage] = useState('en');

    const translatePage = async (targetLanguage) => {
        const elementsToTranslate = document.querySelectorAll('[data-translate]');
        for (const element of elementsToTranslate) {
            const originalText =
                element.getAttribute('data-original-text') || element.innerText;

            if (!element.getAttribute('data-original-text')) {
                element.setAttribute('data-original-text', originalText);
            }

            try {
                // Make API call to translate the text
                const response = await axios.post(
                    `https://translation.googleapis.com/language/translate/v2`,
                    {
                        q: originalText,
                        target: targetLanguage,
                        format: 'text',
                    },
                    {
                        params: { key: 'AIzaSyDWaxkaEDawI7m9o6hHdgrO8VFfbyUbK50' }, 
                    }
                );

                // Update the translated text
                element.innerText =
                    response.data.data.translations[0]?.translatedText || originalText;
            } catch (error) {
                console.error('Translation error:', error);
                element.innerText = originalText; // Fallback to original text
            }
        }
    };

    const toggleLanguage = () => {
        const newLanguage = currentLanguage === 'en' ? 'es' : 'en';
        setCurrentLanguage(newLanguage);
        translatePage(newLanguage);
    };

    return (
        <header>
            <div className="container">
                <nav>
                    <div className="logo">
                        <img src="/Bee_logo_word.png" alt="Bee Ready Logo" />
                        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <span data-translate>Bee Ready</span>
                        </Link>
                    </div>
                    <div>
                        <a href="/" id="home-link" data-translate>
                            Home
                        </a>
                        <a href="/resources" id="resources-link" data-translate>
                            Resources
                        </a>
                        <a href="/for-kids" id="for-kids-link" data-translate>
                            For Kids
                        </a>
                        <button
                            id="translate-btn"
                            style={{ marginLeft: '1rem' }}
                            onClick={toggleLanguage}
                        >
                        {currentLanguage === 'en' ? 'Espanol' : 'English'}
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;
