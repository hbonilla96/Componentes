import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import addBoards from '@/redux/ActionCreators/Boards';
import Header from '@/components/Header';
import { Link } from 'react-router-dom';
import BoardElement from '@/components/Boards';

import './styles.css';

const getUserLoggedData = () => {
  const data = localStorage.getItem('me');
  return JSON.parse(data);
}

const mapStateToProps = (state, ownProps) => {
  return {
    boards: state.boards.board,
    error: state.boards.error,
    isLoading: state.boards.isLoading,
  }
}

const mapDispatchToProps = {
  addBoards,
}

class Boards extends React.Component {
  constructor(props) {
    super();
    this.state = {
      token: getUserLoggedData().token,
      boards: [],
      examples: [
        { name: 'Space' },
        { name: 'Architecture' },
        { name: 'Garden' },
        { name: 'Woodstock' },
        { name: 'El Chombo' },
      ]
    }
  }
  componentDidMount() {
    const board = this.getUserBoards(this.state.token);
    console.log('boards', board);
  }

  getUserBoards = (token) => {
    axios.create({
      baseURL: 'http://localhost:3377',
      timeout: 1000,
      headers: { 'Content-Type': 'application/json' },
    });
    axios.interceptors.request.use(config => {
      console.log('token', token);
      if (token) config.headers.Authorization = `Bearer ${token}`;
      return config;
    }, error => {
      return Promise.reject(error);
    });
    axios({
      method: 'get',
      url: `http://localhost:3377/board/admin`, headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(res => {
        console.log('RESPONSE GET BOARDS ==>', res);
        this.props.addBoards(res.data);
        return res;
      }).catch(err => console.log('ERROR', err));
  }

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
                {
                  this.props.boards.map((el, i) => (
                    <div key={i} className="col-md-4">
                      <BoardElement item={el} />
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Boards);