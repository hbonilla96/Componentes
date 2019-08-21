import React from 'react';
import Header from '@/components/Header';
import { SubmitBtn } from '@/components/shared/forms/buttons';

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
// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Login extends React.Component {
  constructor(props) {
    super();
    this.state = {
      user: {
        firstName: 'Kevin',
        lastName: 'Martinez',
        email: 'mkevin755@gmail.com',
        about: 'I am happy',
        location: 'Costa Rica',
        password: 'pepito',
      }
    };
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="profile-general-container">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <h1>Edit Profile</h1>
              </div>
              <div className="col-md-12">
                <div className="container">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="profile-image--container">
                        <img className="profile-image" src="https://via.placeholder.com/150" alt="profile" />
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="row">
                            <div className="col-md-8">
                              <p>
                                People on Pinterest will get to know you with the info below
                            </p>
                            </div>
                            <div className="col-md-4">
                              <Button color="primary">Save</Button>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <Form className="form-container">
                            <FormGroup row>
                              <Label htmlFor="firstName" sm={2}>First Name</Label>
                              <Col>
                                <Input type="text" value={this.state.user.firstName} name="firstName" id="firstName" placeholder="First Name" />
                              </Col>
                            </FormGroup>
                            <FormGroup row>
                              <Label htmlFor="lastName" sm={2}>Last Name</Label>
                              <Col>
                                <Input type="text" value={this.state.user.lastName} name="lastName" id="lastName" placeholder="Last Name" />
                              </Col>
                            </FormGroup>
                            <FormGroup row>
                              <Label htmlFor="username" sm={2}>Email</Label>
                              <Col>
                                <Input type="email" value={this.state.user.email} name="username" id="username" placeholder="username" />
                              </Col>
                            </FormGroup>
                            <FormGroup row>
                              <Label htmlFor="about" sm={2}>About your profile</Label>
                              <Col>
                                <Input type="textarea" value={this.state.user.about} name="about" id="about" placeholder="About me..." />
                              </Col>
                            </FormGroup>
                            <FormGroup row>
                              <Label htmlFor="location" sm={2}>Location</Label>
                              <Col>
                                <Input type="text" value={this.state.user.location} name="location" id="location" />
                              </Col>
                            </FormGroup>
                          </Form>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="password-container">
                            <div className="row">
                              <div className="col-md-12">
                                <h5>Change Password Section</h5>
                              </div>
                              <div className="col-md-12">
                                <Form>
                                  <FormGroup row>
                                    <Label htmlFor="username" sm={2}>Password</Label>
                                    <Col>
                                      <Input type="password" value={this.state.user.password} name="username" id="username" placeholder="username" />
                                    </Col>
                                  </FormGroup>
                                </Form>
                              </div>
                            </div>
                          </div>
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

export default Login;