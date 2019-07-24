import React from 'react';
import './styles.css';

export default function (props) {
  return (
    <div className="header-container">
      <ul className="nav justify-content-end">
        <li class="nav-item">
          <a className="nav-link active" href={'/#'}>Login</a>
        </li>
        <li className="nav-item">
          <a class="nav-link" href={'/#'}>Sign Up</a>
        </li>
      </ul>
    </div>
  )
}