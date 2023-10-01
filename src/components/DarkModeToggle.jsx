import React from 'react';

const DarkModeToggle = () => {
  // JavaScript to toggle dark mode
  const toggleDarkMode = () => {
    const body = document.body;
    body.classList.toggle('dark-mode');
  };

  return (
    <div className="dark-mode-toggle-container">
      <button id="dark-mode-button" onClick={toggleDarkMode}>
        Toggle Dark Mode
      </button>
    </div>
  );
};

export default DarkModeToggle;