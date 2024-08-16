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
    description="Web Builder Assignment's Services."
  >
    <header id="services">
      <div className="title">
        <h2>Services<span className="period">.</span></h2>
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

    <div id="services">
    <img className="card-1" src="/images/card-1.png" alt="card 1"></img>
    </div>

    <div id="services">
      <h1>Over 33 Years of Real Estate Success</h1>
        <p>At Real Estate Home Solutions, we offer unmatched service to every client, 
          often anticipating their needs before they do. In real estate, 
          almost everything is negotiable, but our exceptional experience 
          is non-negotiable. Experience real estate like never before with us.
        </p>
    </div>
    
  </Main>
);

export default Services;
