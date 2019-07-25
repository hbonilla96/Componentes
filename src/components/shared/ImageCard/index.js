import React from 'react';
import { Link } from "react-router-dom";
import StackGrid from "react-stack-grid";

class CardImage extends React.Component {
  constructor (props) {
    super()
    this.state = {
      perPage: 10,
      images : [
        {
          width : '200',
          height : '400',
        },
        {
          width : '300',
          height : '400',
        },
        {
          width : '400',
          height : '200',
        },
        {
          width : '400',
          height : '200',
        },
        {
          width : '200',
          height : '400',
        },
        {
          width : '300',
          height : '400',
        },
        {
          width : '400',
          height : '200',
        },
        {
          width : '400',
          height : '200',
        },
        {
          width : '400',
          height : '200',
        },
        {
          width : '200',
          height : '400',
        },
        {
          width : '300',
          height : '400',
        },
        {
          width : '400',
          height : '200',
        },
        {
          width : '400',
          height : '200',
        },
      ]
    }
  }
  render () {
    return (
      <StackGrid
        columnWidth={300}
      >
      {
        this.state.images.map((e, index) => (
          <div key={index}>
            <div className="card" style={{ width: '18rem' }}>
              <img src={`https://dummyimage.com/${e.width}x${e.height}/000/fff`} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to="/home" className="btn btn-primary">Go somewhere</Link>
              </div>
            </div>
          </div>
        ))
      }
      </StackGrid>
    );
  }
};

export default CardImage;