import React from 'react';
import './styles.css';

export default function () {
  return (
    <div className="loader-container">
      <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      <p className="loader-text">Loading...</p>
    </div>
  )
}