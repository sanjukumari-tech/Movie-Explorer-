import React from 'react';


function Footer() {
  return (
    <footer className="footer">
      <p>© 2023 MovieExplore. All rights reserved.</p>
      <p>
        <a href="https://www.example.com/terms" target="_blank" rel="noopener noreferrer">
          Terms of Service
        </a>
        {' | '}
        <a href="https://www.example.com/privacy" target="_blank" rel="noopener noreferrer">
          Privacy Policy
        </a>
      </p>
    </footer>
  );
}

export default Footer;