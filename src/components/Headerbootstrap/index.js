import React from "react";
import { Link, useNavigate } from "react-router-dom";




export default function Headerbootstrap(props) {

  const navigate=useNavigate()

  const logout = () =>{
    props.handleLogout()
    navigate("/login")
  }
  return (
    <header>
      {/* <!-- Sidebar --> */}
      <nav
        id="sidebarMenu"
        className="collapse d-lg-block sidebar collapse bg-white"
      >
        <div className="position-sticky">
          <div className="list-group list-group-flush mx-3 mt-4">
          <Link
              to="/search"
              className="list-group-item list-group-item-action py-2 "
              aria-current="true"
            >
              <i className="fas fa-newspaper fa-fw me-3"></i>
              <span>Search</span>
            </Link>
            {/* <Link
              to="/"
              className="list-group-item list-group-item-action py-2 "
              aria-current="true"
            >
              <i className="fas fa-newspaper fa-fw me-3"></i>
              <span>My Feed</span>
            </Link> */}
            <Link
              to="/projects"
              className="list-group-item list-group-item-action py-2 "
            >
              <i className="fas fa-project-diagram fa-fw me-3"></i>
              <span>Projects</span>
            </Link>
            <Link
              to="/create"
              className="list-group-item list-group-item-action py-2 "
            >
              <i className="fas fa-project-diagram fa-fw me-3"></i>
              <span>New Project</span>
            </Link>
            {/* <Link
              to="/calendar"
              className="list-group-item list-group-item-action py-2 "
            >
              <i className="fas fa-calendar-alt fa-fw me-3"></i>
              <span>Calendar</span>
            </Link> */}
            <Link
              to="/community"
              className="list-group-item list-group-item-action py-2 "
            >
              <i className="fas fa-people-carry fa-fw me-3"></i>
              <span>Community</span>
            </Link>
            <Link
              to="/curriculum"
              className="list-group-item list-group-item-action py-2 "
            >
              <i className="fas fa-book fa-fw me-3"></i>
              <span>Curriculum</span>
              </Link>
            
            <button onClick={logout}><span>Logout</span>
            </button>
          </div>
        </div>
      </nav>
      {/* <!-- Sidebar --> */}

      {/* <!-- Navbar --> */}
      <nav
        id="main-navbar"
        className="navbar navbar-expand-lg navbar-light bg-white fixed-top"
      >
        {/* <!-- Container wrapper --> */}
        <div className="container-fluid">
          {/* <!-- Toggle button --> */}
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#sidebarMenu"
            aria-controls="sidebarMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          {/* <!-- Brand --> */}
          <a className="navbar-brand" href="#">
            <h1 className="header-title">
              <span className="letter1">C</span>
              <span className="letter2">O</span>
              <span className="letter3">N</span>
              <span className="letter4">N</span>
              <span className="letter5">E</span>
              <span className="letter6">C</span>
              <span className="letter7">T</span>
              <span className="letter8">-</span>
              <span className="letter9">E</span>
              <span className="letter10">D</span>
            </h1>
            {/* <img
             src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png"
             height="25"
             alt=""
             loading="lazy"
             /> */}
          </a>
          {/* <!-- Search form --> */}
          <form className="d-none d-md-flex input-group w-auto my-auto">
            <input
              autoComplete="off"
              type="search"
              className="form-control rounded"
              placeholder='Search (ctrl + "/" to focus)'
              id="search-form"
              //  style="min-width: 225px"
            />
            <span className="input-group-text border-0">
              <i className="fas fa-search"></i>
            </span>
          </form>

          {/* <!-- Right links --> */}
          <ul className="navbar-nav ms-auto d-flex flex-row">
            {/* <!-- Notification dropdown --> */}
            <li className="nav-item dropdown">
              <a
                className="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-bell"></i>
                <span className="badge rounded-pill badge-notification bg-danger">
                  1
                </span>
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Some news
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another news
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>

            {/* <!-- Icon --> */}
            <li className="nav-item">
              <a className="nav-link me-3 me-lg-0" href="#">
                <i className="fas fa-fill-drip"></i>
              </a>
            </li>
            {/* <!-- Icon --> */}
            <li className="nav-item me-3 me-lg-0">
              <a className="nav-link" href="#">
                <i className="fab fa-github"></i>
              </a>
            </li>

            {/* <!-- Icon dropdown --> */}
            <li className="nav-item dropdown">
              <a
                className="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow"
                href="#"
                id="navbarDropdown"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="flag flag-united-states m-0"></i>
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="flag flag-united-states"></i>English
                    <i className="fa fa-check text-success ms-2"></i>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="flag flag-poland"></i>Polski
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="flag-china flag"></i>中文
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="flag-japan flag"></i>日本語
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="flag-germany flag"></i>Deutsch
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="flag-france flag"></i>Français
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="flag-spain flag"></i>Español
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="flag-russia flag"></i>Русский
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="flag-portugal flag"></i>Português
                  </a>
                </li>
              </ul>
            </li>

            {/* <!-- Avatar --> */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle hidden-arrow d-flex align-items-center"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                // link to cloudinary so profile pic renders as "src"
                  src=""
                  className="rounded-circle"
                  height="22"
                  alt=""
                  loading="lazy"
                />
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    My profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Settings
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Logout
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        {/* <!-- Container wrapper --> */}
      </nav>
      {/* <!-- Navbar --> */}
    </header>
  );
}
