import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="home bd-is-snippet bd-is-fullwidth bd-is-horizontal bd-is-size-1">
        <section className="section is-medium">
          <h1 className="title is-1">Hi! I'm Pato.</h1>
          <h2 className="subtitle is-1">
            I'm a father, husband, musician and surfer.
          </h2>
          <h3 className="subtitle is-4">
            I'm also a Web Developer, currently studying Front-End, <br />
            and Co-Founder of{" "}
            <Link
              className="wb-link link"
              to="https://wabi-sabi.digital"
              target="_blank"
            >
              WABISABI
            </Link>
            .
          </h3>
          <p className="to-right">
            Feel free to check my{" "}
            <Link className="pref link" to="portfolio">
              portfolio
            </Link>
            , and audiovisual art works.
          </p>
        </section>
      </div>
    </>
  );
}

export default Home;
