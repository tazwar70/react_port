import React from 'react';
import './App.css';

function Footer() {
  return (
    <footer id="footer">
        <div className="container">
            <ul className="list-inline">
                <li className="list-inline-item"><a href="https://twitter.com/TazwarH"><i className="fab fa-twitter"></i></a></li>
                <li className="list-inline-item"><a href="https://github.com/tazwar70?tab=repositories"><i className="fab fa-github"></i></a></li>
                <li className="list-inline-item"><a href="https://www.instagram.com/tazwar70"><i className="fab fa-instagram"></i></a></li>
            </ul>
            <ul className="copyright">
                <li>2022 © Md Shadman Tajwar Haque</li>
            </ul>
            <ul className="text-center">
            <li>
                <a href="https://projects.tajwar.ml"><i className="fas fa-rss-square"></i> View Projects</a>
            </li>
            </ul>
        </div>
    </footer>
  );
}

export default Footer;