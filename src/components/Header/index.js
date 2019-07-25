import React from 'react';
import './styles.css';

export default function (props) {
  return (
    <div className="header-container">
      <div className="row">
        <div className="col-md-2">
          <p className="logo-container">Logo</p>
        </div>
        <div className="col-md-10">
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <a className="nav-link custom-anchor" href={'/#'}>Sign Up</a>
            </li>
            <li className="nav-item">
              <a className="nav-link custom-anchor" href={'/#'}>Login</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}