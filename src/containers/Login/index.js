import React from 'react';
import Header from '@/components/Header';
import Input from '@/components/shared/forms/input';
import { SubmitBtn } from '@/components/shared/forms/buttons';

// Styles
import './styles.css';
// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Login extends React.Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-5">
              <div className="login-container">
                <div className="row">
                  <div className="col-md-12">
                    <FontAwesomeIcon icon="person-booth" />
                    <h3>Welcome!</h3>
                    <p>Please login to enter your account</p>
                  </div>
                  <div className="col-md-12">
                    <form>
                      <Input label={'Email'} type={'email'} placeholder={'Email'} id={'emailInput'} />
                      <Input label={'Password'} type={'password'} placeholder={'Password'} id={'passwordInput'} />
                      <SubmitBtn text={'Continue'} />
                    </form>
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
      </React.Fragment>
    )
  }

}

export default Login;