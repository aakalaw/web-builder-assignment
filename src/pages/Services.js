// Services.js

import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import Main from '../layouts/Main';
import { CommandDemo } from '../components/CommandDemo';



import Cell from '../components/Services/Cell';
import data from '../data/services';

const Services = () => (
  <Main
    title="Services"
    description="Web Builder Assignment's Services."
  >
    <header id="services">
      <div className="title">
        <h2>Services</h2>
        <p>Your commercial property objectives are our priority.</p>
      </div>
      <FontAwesomeIcon className="search-icon" icon={faSearch} />
        <form id="search" method="get" action="/services">
          <input type="text" name="query" placeholder="Search by Address or Area" />
        </form>
    </header>

    <article id="services" className="cell-container">
    {data.map((services) => (
        <Cell
          data={services}
          key={services.title}
        />
      ))}
    </article>
  </Main>
);

export default Services;
