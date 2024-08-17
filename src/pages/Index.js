import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description="Real Estate Home Solution's About."
  >
    <header id="services">
      <div className="title">
        <h2>About this site<span className="period">.</span></h2>
          <p>A responsive, statically-generated, react application written with modern Javascript.</p>
      </div>
    </header>
    <article className="post" id="index">
      <p>Find out more about our <Link to="/services">Real Estate Services</Link> here.</p>
    </article>

  </Main>
);

export default Index;
