import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import StackGrid from "react-stack-grid";

import Loader from '../Loading';
import './styles.css';

const randomIdImage = () => {
  return Math.round(Math.random() * (1016 - 1001) + 1001);
};

const ImageComponent = (props) => {
  const { images } = props;
  return (
    <StackGrid
      columnWidth={270}
    >
      {
        images.map((e, index) => (
          <div key={index}>
            <Link to={`/${index}`}>
              <div className="card" style={{ width: '16rem' }}>
                <img src={e.download_url} className="card-img-top" alt="..." />
              </div>
            </Link>
          </div>
        ))
      }
    </StackGrid>
  );
}
class CardImage extends React.Component {
  constructor(props) {
    super()
    this.state = {
      perPage: 10,
      loading: true,
      timer: null,
      images: [],
    }
  }

  componentDidMount() {
    // this.setState({loading : true});
    axios.get(`https://picsum.photos/v2/list`)
      .then(res => {
        const persons = res.data;
        console.log('pictures', res);
        this.setState({ images: persons });
        setTimeout(() => {
          this.setState({ loading: false });
        }, 3000);
      })
  };
  // useEffect(() => {
  //   // Actualiza el título del documento usando la API del navegador
  //   document.title = `You clicked ${count} times`;
  // });

  render() {
    console.log('Random number', randomIdImage())
    if (this.state.loading) {
      return (
        <React.Fragment>
          <Loader />
        </React.Fragment>
      )
    } else {
      return (
        <ImageComponent images={this.state.images} />
      );
    }
  }
};

export default CardImage;