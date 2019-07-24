import React from 'react';

export default function (props) {
  return (
    <div className="form-group">
      <label>{props.label}</label>
      <input type={props.type} className="form-control" placeholder={props.placeholder} />
    </div>
  )
};