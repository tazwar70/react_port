import React from 'react';
import logo from './logo.svg';
import './App.css';

function NavBar() {
  return (
    <nav className='navbar sticky-top navbar-dark bg-dark'>
        <div className='container-fluid'>            
            <a className="navbar-brand" href="/"><img src={logo} className="App-logo" alt="logo" id='navbar-logo'/> Md Shadman Tajwar Haque</a>
            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <span className="navbar-toggler-icon"></span>
            </a>
            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-dark">
                <li><a className="dropdown-item" href="https://www.linkedin.com/in/tajwarhaque/"><i className="fab fa-linkedin"></i> LinkedIn</a></li>
                <li><a className="dropdown-item" href="https://github.com/tazwar70?tab=repositories"><i className="fab fa-github"></i> GitHub</a></li>
                <li><a className="dropdown-item" href="https://projects.tajwar.ml/"><i className="fab fa-blogger"></i> Projects</a></li>
            </ul>         
        </div>        
    </nav>
  );
}

export default NavBar;