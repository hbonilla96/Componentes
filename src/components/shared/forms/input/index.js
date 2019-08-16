import React from 'react';

export default function (props) {
  return (
    <div className="form-group row">
      <label htmlFor={props.id} className="col-sm-3 col-form-label">{props.label}</label>
      <div className="col-md-9">
        <input id={props.id} type={props.type} className="form-control" placeholder={props.placeholder} />
      </div>
    </div>
  )
};