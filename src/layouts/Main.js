import React from 'react';
import PropTypes from 'prop-types';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router-dom';

import ContactIcons from '../components/Contact/ContactIcons';
import { ThemeProvider } from '../components/Theme/theme-provider';
import Navigation from '../components/Template/Navigation';
import ScrollToTop from '../components/Template/ScrollToTop';

const Main = (props) => (
  <HelmetProvider>
    <ThemeProvider
    attribute="class"
    defaultTheme="system"
    enableSystem
    disableTransitionOnChange
    >
    <ScrollToTop />
    <Helmet titleTemplate="%s | Real Estate" defaultTitle="Real Estate" defer={false}>
      {props.title && <title>{props.title}</title>}
      <meta name="description" content={props.description} />
    </Helmet>
    <div id="wrapper">
      <Navigation />
      <div id="main">
        {props.children}
        <section id="footer">
          <ContactIcons />
          <p className="copyright"> Website Designed & Developed by <Link to="">Angelo Aaron Kalaw</Link></p>
        </section>
      </div>
    </div>
    
    </ThemeProvider>
  </HelmetProvider>
);

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  fullPage: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
};

Main.defaultProps = {
  children: null,
  fullPage: false,
  title: null,
  description: "Web Builder Assignment Website.",
};

export default Main;
