import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './styles.css';

const GeneralHeader = (props) => {
  return (
    <div className="header-container">
      <div className="row">
        <div className="col-md-2">
          <a className="logo-container nav-link custom-anchor" href={'/home'}>Logo</a>
        </div>
        <div className="col-md-10">
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <a className="nav-link custom-anchor" href={'/#'}>Sign Up</a>
            </li>
            <li className="nav-item">
              <a className="nav-link custom-anchor" href={'/'}>Login</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default function (props) {
  const [login, setLogin] = useState(true);
  if (login) {
    return (
      <div className="header-container">
        <div className="row">
          <div className="col-md-2">
            <a className="logo-container nav-link custom-anchor" href={'/home'}>Logo</a>
          </div>
          <div className="col-md-10">
            <ul className="nav justify-content-end">
              <li className="nav-item">
                <a className="nav-link custom-anchor" href={'/profile'}>
                  <FontAwesomeIcon icon="person-booth" />
                  Kevin
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link custom-anchor" href={'/'}>Log out</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  return (
    <GeneralHeader />
  )
}