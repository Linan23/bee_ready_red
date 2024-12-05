import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Header() {
    const [currentLanguage, setCurrentLanguage] = useState('en');

    const translatePage = async (targetLanguage) => {
        const elementsToTranslate = document.querySelectorAll('[data-translate]');

        // Collect all texts to translate in a single batch
        const textsToTranslate = [];
        elementsToTranslate.forEach((element) => {
            const originalText =
                element.getAttribute('data-original-text') || element.innerText;

            if (!element.getAttribute('data-original-text')) {
                element.setAttribute('data-original-text', originalText);
            }

            textsToTranslate.push(originalText);
        });

        try {
            // change the text with one call to google translate
            const response = await axios.post(
                `https://translation.googleapis.com/language/translate/v2`,
                {
                    q: textsToTranslate, // Send all texts in a batch
                    target: targetLanguage,
                    format: 'text',
                },
                {
                    params: { key: 'AIzaSyDWaxkaEDawI7m9o6hHdgrO8VFfbyUbK50' },
                }
            );

            // translate the texts
            const translatedTexts = response.data.data.translations;
            elementsToTranslate.forEach((element, index) => {
                element.innerText =
                    translatedTexts[index]?.translatedText || element.getAttribute('data-original-text');
            });
        } catch (error) {
            console.error('Translation error:', error);

            // error catch
            elementsToTranslate.forEach((element) => {
                element.innerText = element.getAttribute('data-original-text');
            });
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
                        <a href="/about-us" id="about-us-link" data-translate>
                            About Us
                        </a>
                        <button
                            id="translate-btn"
                            style={{ marginLeft: '1rem' }}
                            onClick={toggleLanguage}
                        >
                            {currentLanguage === 'en' ? 'English' : 'español'}
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;
