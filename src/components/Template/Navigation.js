import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import Hamburger from './Hamburger';
import routes from '../../data/routes';

const Navigation = () => {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById('header');
      if (window.scrollY > 50) { // Adjust this value based on when you want the effect to trigger
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header id="header">
      <h1 className="index-link">
        {routes.filter((l) => l.index).map((l) => (
          <Link key={l.path} to={l.path}>
            <img className="header-icon" src={l.img} alt="Header Icon" />
          </Link>
        ))}
      </h1>
      <nav className="links">
        <ul>
          {routes.filter((l) => !l.index).map((l) => (
            <li key={l.label}>
              <Link class="active" to={l.path}>{l.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <Hamburger />
    </header>
  );
};

export default Navigation;
