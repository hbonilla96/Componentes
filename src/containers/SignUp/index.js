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

class SignUp extends React.Component {
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
        <div className="main-container">
          <div className="main-container--opacity">
            <div className="container-fluid">
              <div className="row justify-content-center">
                <div className="col-5">
                  <div className="login-container">
                    <div className="row">
                      <div className="col-md-12">
                        <h3>Welcome to Pinterest!</h3>
                        <p>Find new ideas to try</p>
                      </div>
                      <div className="col-md-12">
                        <Form>
                          <FormGroup>
                            <Input label={'Email'} type={'email'} placeholder={'Enter your email'} id={'emailInput'} />
                          </FormGroup>
                          <FormGroup>
                            <Input label={'Password'} type={'password'} placeholder={'Create Password'} id={'passwordInput'} />
                          </FormGroup>
                          <SubmitBtn text={'Continue'} />
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

export default SignUp;