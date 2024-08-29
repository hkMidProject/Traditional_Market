import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/CSS/header.css';  // 헤더의 스타일을 위한 CSS 파일

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // 검색 로직 구현
    console.log('Search Query:', searchQuery);
  };

  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/signin">SignIn</Link></li>
        </ul>
        <form className="search-form" onSubmit={handleSearchSubmit}>
          <input
            type="text"
            className="search-input"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button type="submit" className="search-button">Search</button>
        </form>
      </nav>
    </header>
  );
};

export default Header;
