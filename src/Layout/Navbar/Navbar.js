/** React imports */
import React from 'react';

/**
 * Application Navbar
 */
const NavBarComponent = (props) => {

  return (
    <header>
      <div className="collapse bg-dark" id="navbarHeader">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 col-md-7 py-4">
              <h4 className="text-white">About Me</h4>
              <p className="text-muted">
                Hi, my name is Nelson Fernández, i'm a System Engineer. I am passionate about technology.
              </p>
              <p className="text-muted">
                Many people, are searching his next job.
                To be able to satisfy of help this desire, I present this project.
                This project was Created using <strong>React framework</strong> and the <strong>Github Jobs API </strong>
                wich allows us to search, and view jobs with JSON over HTTP.
              </p>
            </div>
            <div className="col-sm-4 offset-md-1 py-4">
              <h4 className="text-white">Contact</h4>
              <ul className="list-unstyled">
                <li><a href="https://www.instagram.com/nelsonj94/" className="text-white">Follow on Instagram</a></li>
                <li><a href="https://www.linkedin.com/in/nelsonf94/" className="text-white">Follow on LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar navbar-dark bg-dark box-shadow">
        <div className="container d-flex justify-content-between">
          <a href="#" className="navbar-brand d-flex align-items-center">
            <img src="https://img.icons8.com/ios/50/000000/search-database.png" />
            <strong>Job Search.com</strong>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default NavBarComponent;