import React from 'react';
//import $ from "jquery";
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Opening */}
      <section className='App-hero' id='home'>
        <h2>
          Hello and welcome to my website!
        </h2>
        <div className='row'>
          <div className='col'>
            <a type='button' className='btn btn-dark' href='#about' id='goto_about'>
              About
            </a>
          </div>
          <div className='col'>
            <a type='button' className='btn btn-dark' href='#projects' id='goto_projects'>
              Projects
            </a>
          </div>
        </div>
      </section>
      {/* About */}
      <section className="App-header" id='about'>
        <h2>
          About
        </h2>
        <div className='card text-bg-light mb-3'>
          <div className='row g-0'>
            <div className='col-md-4'>
              <img className="card-img img-fluid" src='https://media-exp1.licdn.com/dms/image/C5603AQFLE6K__v--1w/profile-displayphoto-shrink_800_800/0/1661961439321?e=1668038400&v=beta&t=UAyeCnpo02BeOpSVtpuHGZFfbcI6ykZQRDOsBp2Ire0' alt='profile'/>
            </div>
            <div className='col-md-8'>
              <div className='card-body align-middle'>
                <h5 className="card-title">Hi, I'm Tajwar,</h5>
                <p className='card-text'>
                  I'm a Dev based in Toronto with a few years of experience in the Telecommunications, Health Care and Education industry primarily working with web development. My area of interests are in Machine Learning and Data Science.
                </p>
                <button type='button' className='btn btn-info' onClick={goto_linkedin}>
                  <i className="fab fa-linkedin"></i> Connect on LinkedIn
                </button>
              </div>
            </div>            
          </div>
        </div>
      </section>
      {/* Projects */}
      <section className='App-hero' id='projects'>
        <h2>
          Projects
        </h2>
        <div className='row justify-content-around' style={{margin:0,}}>
          <div className='col-md-4'>
            <div className='card text-bg-dark mb-3'>
                <div className="card-header">Recent Projects</div>
                  <div className="card-body">                    
                    <p className="card-text">Some of my recent projects are available on Data Analytics and Machine Learning are available here.</p>
                    <button type='button' className='btn btn-info' onClick={goto_portfolio}>
                    <i className="fad fa-blog"></i> View my Portfolio
                    </button>
                  </div>
              </div>
          </div>
          <div className='col-md-4'>
            <div className='card text-bg-dark mb-3'>
              <div className="card-header">GitHub Repo</div>
                <div className="card-body">                  
                  <p className="card-text">View all of my past work on my GitHub repositories.</p>
                  <button type='button' className='btn btn-info' onClick={goto_github}>
                    <i className="fab fa-github"></i> View my GitHub repo
                  </button>
                </div>
            </div>
          </div>          
        </div>
      </section>
    </div>
  );
}
/* Functions */
function goto_linkedin(){
  window.open("https://www.linkedin.com/in/tajwarhaque/",'_blank');
}
function goto_portfolio(){
  window.open("https://projects.tajwar.ml/",'_blank');
}
function goto_github(){
  window.open("https://github.com/tazwar70?tab=repositories",'_blank');
}

export default App;