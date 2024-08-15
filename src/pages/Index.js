import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"AAK's personal website.  "
    + '.'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">About this site</Link></h2>
          <p>
            A functional and responsive static web application developed using HTML, CSS, and modern JavaScript.
          </p>
        </div>
      </header>
      <p> Click here to learn more about our<Link to="/services"> Real Estate Services.</Link> </p>
    </article>

  </Main>
);

export default Index;
