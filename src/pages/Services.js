// Services.js

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import Main from '../layouts/Main';
import Cell from '../components/Services/Cell';
import data from '../data/services';

const Services = () => (
  <Main
    title="Services"
    description="Real Estate Home Solution's Services."
  >
    <header id="services">
      <div className="title">
        <h2>Services<span className="period">.</span></h2>
        <p>Your commercial property objectives are our priority.</p>
      </div>
    </header>

    <div id="services" className="post">
      <FontAwesomeIcon className="search-icon" icon={faSearch} />
      <form id="search" method="get" action="/services">
        <input type="text" name="query" placeholder="Search by Address or Area" />
      </form>
    </div>

    <div id="services" className="cell-container">
      {data.map((services) => (
        <Cell
          data={services}
          key={services.title}
        />
          )
        )
      }
    </div>
  </Main>
);

export default Services;
