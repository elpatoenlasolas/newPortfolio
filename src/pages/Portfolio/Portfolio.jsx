import React from "react";
import Card from '../../components/card/PortfolioCard';
import { Link  } from 'react-router-dom';
import "./Portfolio.css";

function Portfolio() {
  
return (

  // Intro Hero
    <div className='bd-is-snippet bd-is-fullwidth bd-is-horizontal bd-is-size-1'>
      <section className="hero is-medium is-beautiful">
        <div className="hero-body">
          <p className="title">Portfolio</p>
          <p className="subtitle">Here are some of my most recent works.</p>
          <p>You can find more on my <span className="wb-link"><strong><Link to="https://github.com/elpatoenlasolas" target="_blank">GitHub</Link></strong></span></p>
        </div>
      </section>
  {/* Title Hero */}
    <section className="hero is-small is-cool">
      <div className="hero-body">
        <h1 className="title portfolio-title">Web Design</h1>
      </div>
    </section>
    
  {/* Cards */}
    <section className="hero is-fullheight is-chill">
      <div className="hero-body">
        <Card />
      </div>
    </section>


  {/* Title Hero */}
  <section className="hero is-small is-cool">
      <div className="hero-body">
        <h1 className="title portfolio-title">Web Apps</h1>
      </div>
    </section>


  {/* Cards */}
  <section className="hero is-fullheight is-chill">
      <div className="hero-body">
        <Card />
      </div>
    </section>

      </div>
)
}

export default Portfolio;