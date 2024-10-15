// Header.js
import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.header}>
      <p style={styles.text}>© 2024 FreddiMAC. All Rights Reserved.</p>
    </footer>
  );
};

// Inline styles for simplicity
const styles = {
    footer: {
        backgroundColor: '#1a3e5c', // Matches the header's color
        color: 'white',
        textAlign:'right',
        padding: '15px 0',
        position: 'fixed',
        bottom: 0,
        width: '100%',
        fontFamily: 'Arial, sans-serif',
      },
  header: {
      display: 'flex',
       textAlign: 'right',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1a3e5c', // Matches the blue color in the image
    padding: '10px 20px',
    color: 'white',
    fontFamily: 'Arial, sans-serif',
    },
    text: {
        margin: 0,
        fontSize: '14px'
      },
 
};

export default Footer;
