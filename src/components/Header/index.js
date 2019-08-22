import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './styles.css';

const GeneralHeader = (props) => {
  return (
    <div className="header-container">
      <div className="row">
        <div className="col-md-2">
          <Link className="logo-container nav-link custom-anchor" to={'/home'}>Logo</Link>
        </div>
        <div className="col-md-10">
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <Link className="nav-link custom-anchor" to={'/signup'}>Sign Up</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link custom-anchor" to={'/'}>Login</Link>
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
            <Link className="logo-container nav-link custom-anchor" to={'/home'}>Logo</Link>
          </div>
          <div className="col-md-10">
            <ul className="nav justify-content-end">
              <li className="nav-item">
                <Link className="nav-link custom-anchor" to={'/boards'}>
                  <FontAwesomeIcon icon="person-booth" />
                  Kevin
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link custom-anchor" to={'/'}>Log out</Link>
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