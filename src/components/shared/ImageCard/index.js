import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import StackGrid from "react-stack-grid";

import Loader from '../Loading';
import Card from './Card';
import './styles.css';
import { PreviewImageModal } from '@/components/shared/Modals';

const randomIdImage = () => {
  return Math.round(Math.random() * (1016 - 1001) + 1001);
};

const ImageComponent = (props) => {
  const { images, toggleModal } = props;
  return (
    <StackGrid
      columnWidth={270}
    >
      {
        images.map((e, index) => (
          <div key={index} onClick={() => toggleModal(e)} >
            <Card element={e} />
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
      modal: false,
      currentImage: null,
    }
  }

  toggle = (element) => {
    this.setState(prevState => ({
      modal: !prevState.modal,
      currentImage: element,
    }));
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
        <React.Fragment>
          <ImageComponent images={this.state.images} toggleModal={this.toggle} />
          <PreviewImageModal
            modal={this.state.modal}
            toggle={this.toggle}
            image={this.state.currentImage}
            params={{
              modalTitle: 'Add Image to board',
            }
            } />
        </React.Fragment>
      );
    }
  }
};

export default CardImage;