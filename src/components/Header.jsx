import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className="container">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
          <span className="fs-4">Simple header</span>
        </Link>

        <ul className="nav nav-pills">
          <li className="nav-item">
            <NavLink to="/" className="nav-link" aria-current="page">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/form" className="nav-link">
              Form
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/tableList" className="nav-link">
              TableList
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="blog" className="nav-link">
              Blog
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="movie" className="nav-link">
              Movie
            </NavLink>
          </li>
        </ul>
      </header>
    </div>
  )
}

export default Header
