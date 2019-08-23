import React from 'react';
import { connect } from 'react-redux'
import Header from '@/components/Header';
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
    };
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
      email,
      password,
    }
    this.props.userLogin(userCredentials);
    console.log('USER ====>', userCredentials);
  }

  render() {
    return (
      <React.Fragment>
        <Header />
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
                            <Label for="exampleEmail" sm={3}>Email</Label>
                            <Col>
                              <Input
                                type="email"
                                name="email"
                                id="exampleEmail"
                                placeholder="email@example.com"
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
                                placeholder="password"
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
                          <a href={'/'} className="forgot-password--link">Forgot password?</a>
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);