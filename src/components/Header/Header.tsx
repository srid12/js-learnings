import React from "react"

const Header = () => {
  return (
    <nav className="navbar navbar-dark bg-primary navbar-expand-lg  ">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          JS Learnings
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="/machineCoding"
              >
                Machine Coding
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="/datastructures"
              >
                Data Structures
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="/interview"
              >
                Interview Questions
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="/aboutMe"
              >
                About Me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
