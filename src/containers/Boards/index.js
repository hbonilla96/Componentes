import React from 'react';
import Header from '@/components/Header';
import { Link } from 'react-router-dom';
import BoardElement from '@/components/Boards';
// import { Button } from '@/components/shared/CssComponents';

import './styles.css';

class Boards extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <div className="boards-container">
          <div className="container">
            <div className="row justify-content-around">
              <div className="col-md-4">
                <h1>Kevin Martinez</h1>
              </div>
              <div className="col-md-4">
                <div className="button-wrapper">
                  <Link className="btn btn-primary" to={'/profile'}>Profile</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="boards-list--container">
              <div className="row">
                <div className="col-md-4">
                  <BoardElement />
                </div>
                <div className="col-md-4">
                  <BoardElement />
                </div>
                <div className="col-md-4">
                  <BoardElement />
                </div>
                <div className="col-md-4">
                  <BoardElement />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Boards;