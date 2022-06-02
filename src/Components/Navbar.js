import React, { Component } from 'react'
import { Link } from "react-router-dom";

export class Navbar extends Component {

  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark  ">
          <div className="container-fluid px-3">
            <Link className="navbar-brand fw-bolder text-warning ml-3" to="/">NewsUp</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse px-5 mx-3" id="navbarNavDropdown">
              <ul className="navbar-nav ">
                <li className="nav-item ">
                  <Link className="nav-link text-warning" aria-current="page" to="/">Home</Link>
                </li>

                <li className="nav-item ">
                  <Link className="nav-link text-warning" to="/business">Business</Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link text-warning" to="/entertainment">Entertainment</Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link text-warning" to="/health">Health</Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link text-warning" to="/science">Science</Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link text-warning" to="/sports">Sports</Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link text-warning" to="/technology">Technology</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar