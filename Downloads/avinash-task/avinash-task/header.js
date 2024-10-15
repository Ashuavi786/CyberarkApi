// Header.js
import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      {/* Left Section: Logo and Title */}
      <div style={styles.leftSection}>
        <img 
          src="https://www.example.com/logo.png" // Replace with actual Barclays logo URL
          alt="Barclays Logo" 
          style={styles.logo}
        />
        <span style={styles.title}>Access Revocation</span>
      </div>

      {/* Right Section: User Info */}
      <div style={styles.rightSection}>
        <span style={styles.icon}>🔔</span> {/* Notification Icon */}
        <span style={styles.icon}>🔗</span> {/* Link/Chain Icon */}
        <span style={styles.username}>Avinash Algamwar</span>
        <span style={styles.dropdownIcon}>⏷</span> {/* Dropdown Icon */}
      </div>
    </header>
  );
};

// Inline styles for simplicity
const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1a3e5c', // Matches the blue color in the image
    padding: '10px 20px',
    color: 'white',
    fontFamily: 'Arial, sans-serif',
  },
  leftSection: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    height: '40px',
    marginRight: '15px',
  },
  title: {
    fontSize: '20px',
    fontWeight: 'bold',
  },
  rightSection: {
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    fontSize: '20px',
    margin: '0 10px',
    cursor: 'pointer',
  },
  username: {
    marginRight: '10px',
    fontWeight: 'bold',
  },
  dropdownIcon: {
    fontSize: '14px',
    cursor: 'pointer',
  },
};

export default Header;
