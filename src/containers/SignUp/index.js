import React from 'react';
import { connect } from 'react-redux'
import Header from '@/components/Header';
import { SubmitBtn } from '@/components/shared/forms/buttons';
import userSignUp from '@/redux/ActionCreators/SignUp';
import {
  Button,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
} from '@/components/shared/CssComponents';

// Styles
import './styles.css';

const mapStateToProps = (state, ownProps) => {
  return {
    signUp: state.signUp.signUp,
    error: state.signUp.error,
    isLoading: state.signUp.isLoading,
  }
}

const mapDispatchToProps = {
  userSignUp,
}

class SignUp extends React.Component {
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

  handleSubmit = (e) => {
    e.preventDefault();
    const userParams = {
      email: this.state.email,
      password: this.state.password
    }
    this.props.userSignUp(userParams);
    console.log('state ==> ', userParams);
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="signUp-main--container">
          <div className="main-container--opacity">
            <div className="container-fluid">
              <div className="row justify-content-end">
                <div className="col-5">
                  <div className="login-container">
                    <div className="row">
                      <div className="col-md-12">
                        <h3>Welcome to Pinterest!</h3>
                        <p>Find new ideas to try</p>
                      </div>
                      <div className="col-md-12">
                        <Form onSubmit={this.handleSubmit}>
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

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);