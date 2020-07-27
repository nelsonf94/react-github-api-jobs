/** Import React */
import React from 'react';

const Hero = (props) => {
  return (
    <section className="jumbotron text-left">
      <div className="container">
        <div className="col-md-5">
          <h1 className="jumbotron-heading">Job Search.com</h1>
          <p className="lead text-muted text-justify">
            Job Search.com use <strong>The GitHub Jobs API</strong>,
          this API allows you to search,
          and view jobs that satisfy to your technology and location needs.
        </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;