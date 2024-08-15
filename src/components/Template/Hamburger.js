import React, { Suspense, lazy, useState } from 'react';

import { Link } from 'react-router-dom';

const Menu = lazy(() => import('react-burger-menu/lib/menus/slide'));

const Hamburger = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="hamburger-container">
      <nav className="main" id="hambuger-nav">
        <ul>
          {open ? (
            <li className="menu close-menu">
              <div onClick={() => setOpen(!open)} className="menu-hover">&#10005;</div>
            </li>
          ) : (
            <li className="menu open-menu">
              <div onClick={() => setOpen(!open)} className="menu-hover">&#9776;</div>
            </li>
          )}
        </ul>
      </nav>
      <Suspense fallback={<></>}>
        <Menu right isOpen={open}>
          <ul className="hamburger-ul">
              <li>
                <h3><Link to="/">Home</Link></h3>
              </li>
              <li>
                <h3><Link to="/contact">Contact Us</Link></h3>
              </li>
          </ul>
        </Menu>
      </Suspense>
    </div>
  );
};

export default Hamburger;
