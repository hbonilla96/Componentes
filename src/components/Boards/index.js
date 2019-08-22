import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from '@/components/shared/CssComponents';

import './styles.css';

export default () => {
  return (
    <Card>
      <CardBody>
        <div className="board-images--wrapper">
          <div className="row">
            <div className="col-md-6">
              <div
                className="image-temp--container"
                style={{ backgroundImage: `url('https://picsum.photos/id/0/5616/3744')` }}>
              </div>
            </div>
            <div className="col-md-6">
              <div
                className="image-temp--container"
                style={{ backgroundImage: `url('https://picsum.photos/id/1/5616/3744')` }}>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div
                className="image-temp--container"
                style={{ backgroundImage: `url('https://picsum.photos/id/10/2500/1667')` }}>
              </div>
            </div>
            <div className="col-md-6">
              <div
                className="image-temp--container"
                style={{ backgroundImage: `url('https://picsum.photos/id/100/2500/1656')` }}>
              </div>
            </div>
          </div>
        </div>
        <CardTitle>Board Title</CardTitle>
        <CardSubtitle>8 pins</CardSubtitle>
      </CardBody>
    </Card>
  )
}