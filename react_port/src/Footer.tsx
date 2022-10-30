import React from 'react';
import './App.css';

function Footer() {
  return (
    <footer id="footer">
        <div className="container">
            <ul className="list-inline">
                <li className="list-inline-item"><a href="https://www.linkedin.com/in/tajwarhaque/" target="_blank" rel='noreferrer'><i className="fab fa-linkedin"></i></a></li>
                <li className="list-inline-item"><a href="https://github.com/tazwar70?tab=repositories" target="_blank" rel='noreferrer'><i className="fab fa-github"></i></a></li>
                <li className="list-inline-item"><a href="https://www.instagram.com/shotbytajwar" target="_blank" rel='noreferrer'><i className="fab fa-instagram"></i></a></li>
            </ul>
            <ul className="copyright">
                <li>
                    Md Shadman Tajwar Haque
                </li>
                <li>
                    <p>This page was built using Typescript and hosted on GitHub pages</p>
                </li>
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