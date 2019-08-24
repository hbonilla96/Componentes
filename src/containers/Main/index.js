import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import MainHeader from '@/components/Header';
import Home from '@/components/Home';

const mapStateToProps = (state, ownProps) => {
  return {
    login: state.login.login,
    error: state.login.error,
    isLoading: state.login.isLoading,
  }
}

class Main extends React.Component {
  constructor(props) {
    super()
    this.state = {
      userLogged: false,
    }
  }
  render() {
    return (
      <div>
        <MainHeader />
        <Home />
      </div>
    )
  }
}

export default connect(mapStateToProps)(Main);