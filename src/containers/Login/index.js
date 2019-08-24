import React from 'react';
import { connect } from 'react-redux'
import { Redirect, Link } from 'react-router-dom';
import { Button, Col, Input, Form, FormGroup, Label } from '@/components/shared/CssComponents';

import userLogin from '@/redux/ActionCreators/Login';

// Styles
import './styles.css';

const mapStateToProps = (state, ownProps) => {
  return {
    login: state.login.login,
    error: state.login.error,
    isLoading: state.login.isLoading,
  }
}

const mapDispatchToProps = {
  userLogin,
}

class Login extends React.Component {
  constructor(props) {
    super();
    this.state = {
      email: '',
      password: '',
      userLoggin: false,
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.login !== prevProps.login) {
      this.verifyUserLogin();
    }
  }

  verifyUserLogin = () => {
    if (this.props.login.token !== undefined) {
      this.setState({
        userLoggin: !this.state.userLoggin
      })
    } else {
      console.log('LOGIN FAIL', this.props.login);
    }
  }

  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    })
  }

  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value,
    })
  }

  loginSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    const userCredentials = {
      username: email,
      password,
    }
    this.props.userLogin(userCredentials);
  }

  render() {
    if (this.state.userLoggin) {
      return <Redirect to={"/home"} />
    } else {
      return (
        <React.Fragment>
          <div className="header-container">
            <div className="row">
              <div className="col-md-2"></div>
              <div className="col-md-10">
                <ul className="nav justify-content-end">
                  <li className="nav-item">
                    <Link className="nav-link custom-anchor" to={'/signup'}>Sign Up</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link custom-anchor" to={'/'}>Login</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="login-main--container">
            <div className="login-cover">
              <div className="container-fluid">
                <div className="row justify-content-center">
                  <div className="col-4">
                    <div className="login-container-form">
                      <div className="row">
                        <div className="col-md-12">
                          <h3>Welcome!</h3>
                          <p>Enter your credentials to access your account</p>
                        </div>
                        <div className="col-md-12">
                          <Form onSubmit={this.loginSubmit}>
                            <FormGroup row>
                              <Label for="exampleEmail" sm={3}>Username</Label>
                              <Col>
                                <Input
                                  type="text"
                                  name="email"
                                  id="exampleEmail"
                                  onChange={this.handleEmailChange} />
                              </Col>
                            </FormGroup>
                            <FormGroup row>
                              <Label for="examplePassword" sm={3}>Password</Label>
                              <Col>
                                <Input
                                  type="password"
                                  name="password"
                                  id="examplePassword"
                                  onChange={this.handlePasswordChange} />
                              </Col>
                            </FormGroup>
                            <Button color="primary">Continue</Button>
                          </Form>
                        </div>
                      </div>
                      <div className="forgot-passwort--container">
                        <div className="row">
                          <div className="col-md-12">
                            <Link to={'/'} className="forgot-password--link">Forgot password?</Link>
                          </div>
                          <div className="col-md-12">
                            <Link to={'/signup'} className="forgot-password--link">Or Sign up</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);