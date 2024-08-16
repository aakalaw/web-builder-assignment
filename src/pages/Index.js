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
          A responsive, statically-generated, react application written with modern Javascript.
          </p>
        </div>
      </header>
      <p> Learn more about our<Link to="/services"> Real Estate Services here.</Link> </p>
    </article>

  </Main>
);

export default Index;
