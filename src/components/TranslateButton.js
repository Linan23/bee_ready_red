import React, { useState } from 'react';

const TranslateButton = () => {
  const [isWidgetLoaded, setIsWidgetLoaded] = useState(false);

  const handleTranslateClick = () => {
    if (!isWidgetLoaded) {
      // Dynamically load the Google Translate script
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);

      // Initialize the widget when the script is loaded
      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            includedLanguages: 'es,en', // Add languages as needed
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          'google_translate_element'
        );
      };

      setIsWidgetLoaded(true);
    } else {
      // Optionally toggle visibility of the widget
      const translateElement = document.getElementById('google_translate_element');
      if (translateElement) {
        translateElement.style.display = translateElement.style.display === 'none' ? 'block' : 'none';
      }
    }
  };

  return (
    <div>
      <button onClick={handleTranslateClick}>Translate</button>
      {/* Hidden Google Translate Widget Placeholder */}
      <div id="google_translate_element" style={{ display: isWidgetLoaded ? 'block' : 'none' }}></div>
    </div>
  );
};

export default TranslateButton;
