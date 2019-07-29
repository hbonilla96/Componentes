import React from 'react';
import { Link } from "react-router-dom";
import StackGrid from "react-stack-grid";

const randomIdImage = () => {
  return Math.round(Math.random() * (1016 - 1001) + 1001);
};
class CardImage extends React.Component {
  constructor(props) {
    super()
    this.state = {
      perPage: 10,
      images: [
        {
          width: '200',
          height: '400',
        },
        {
          width: '300',
          height: '400',
        },
        {
          width: '400',
          height: '200',
        },
        {
          width: '400',
          height: '200',
        },
        {
          width: '200',
          height: '400',
        },
        {
          width: '300',
          height: '400',
        },
        {
          width: '400',
          height: '200',
        },
        {
          width: '400',
          height: '200',
        },
        {
          width: '400',
          height: '200',
        },
        {
          width: '200',
          height: '400',
        },
        {
          width: '300',
          height: '400',
        },
        {
          width: '400',
          height: '200',
        },
        {
          width: '400',
          height: '200',
        },
      ]
    }
  }
  render() {
    console.log('Random number', randomIdImage())
    return (
      <StackGrid
        columnWidth={300}
      >
        {
          this.state.images.map((e, index) => (
            < div key={index} >
              <div className="card" style={{ width: '18rem' }}>
                <img src={`https://picsum.photos/id/${randomIdImage()}/${e.width}/${e.height}`} className="card-img-top" alt="..." />
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