import React from 'react';
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import { Redirect } from 'react-router'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from '@/components/shared/CssComponents';
import './styles.css';

const mapStateToProps = (state, ownProps) => {
  console.log('ownProps', ownProps);
  return {
    login: state.login.login,
    error: state.login.error,
    isLoading: state.login.isLoading,
  }
}

const loginPage = () => {
  return (
    <Redirect to='/' />
  )
}
class MainHeader extends React.Component {
  constructor(props) {
    super();
    this.state = {
      logged: false,
      userLogged: {}
    }
  }

  componentDidMount() {
    const me = localStorage.getItem('me');

    if (me) {
      this.setState({
        logged: !this.state.logged
      });
      console.log('user logged ======> ', this.state.logged);
    }
  }

  logout = () => {
    // localStorage.clear();
  }
  render() {
    if (this.state.logged) {
      return (
        <div className="header-container">
          <div className="row">
            <div className="col-md-2">
              <Link className="logo-container nav-link custom-anchor" to={'/home'}>
                <FontAwesomeIcon icon="home" />
              </Link>
            </div>
            <div className="col-md-10">
              <ul className="nav justify-content-end">
                <li className="nav-item">
                  <Link className="nav-link custom-anchor" to={'/boards'}>
                    Kevin
                  </Link>
                </li>
                <li className="nav-item">
                  <Button className="logout--button" outline color="primary" size="sm" onClick={this.logout}>Log out</Button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      );
    }
    return (
      ''
    )
  }
}

export default connect(mapStateToProps)(MainHeader);