import React from 'react';

export default function (props) {
  const {
    element
  } = props;
  return (
    <React.Fragment>
      <div className="card image-card" style={{ width: '16rem' }}>
        <img src={element.download_url} className="card-img-top custom-image" alt="..." />
      </div>
    </React.Fragment>
  )
}