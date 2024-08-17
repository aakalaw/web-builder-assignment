import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import EmailLink from '../components/Contact/EmailLink';
import ContactForm from '../components/Contact/ContactForm';

const Contact = () => (
  <Main
    title="Contact Us"
    description="Contact Real State @realstate.com"
  >
    <header id="services">
      <div className="title">
        <h2>Contact Us<span className="period">.</span></h2>
          <p>Please feel free to reach out if you need any assistance. We&apos;re happy to help.</p>
      </div>
    </header>
    <article className="post" id="contact">
      <header>
        <div className="title">
          <p>Send us a message.</p>
          <ContactForm />
        </div>
      </header>
      <div className="email-at">
        <p>You also have the option to reach us by email at:</p>
        <EmailLink />
      </div>
    </article>
  </Main>
);

export default Contact;
