import React, { Component } from "react";
import { connect } from "react-redux";
import { generateAccessToken } from "../api/userAuth";
import { handleError } from "../api";
import * as msg from '../constants/constants';
import { InputField } from "../components/InputField";
import { Button } from "../components/Button";
import { PasswordEye } from "../components/PasswordEye";
import { Loader } from "../components/Loader";
import { ROUTES } from "../constants/routes";

class LoginBlock extends Component {

   state = {
    isRevealPassword: false,
    isLoading: false,
    username: "",
    password: "",
    usernameError: "",
    passwordError: "",
   };

   
  validateForm() {
   
    const { username, password } = this.state;
    let valid = true;

    this.setState({ usernameError: "", passwordError: "" });

    if (username === "") {
      this.setState({ usernameError: msg.USERNAME_FAILED });
      valid = false;
    }

    if (password === "") {
      this.setState({ passwordError: msg.PASSWORD_FAILED });
      valid = false;
    }

    if (!valid) return
    this.userAuth({ username, password });
  }

  

  userAuth({ username, password }) {
    this.setState({ isLoading: true });

    generateAccessToken({ username, password })
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        this.props.setUserLogin();
        this.props.history.push(`${ROUTES.DASHBOARD}`);
      })
      .catch((error) => {
        handleError(error.response, msg.USER_AUTH_FAILED);
        this.setState({ isLoading: false });
      });
  }
  

  togglePassword = event => {
    this.setState({isRevealPassword: !this.state.isRevealPassword});
  }

  render() {
    const {
      isLoading,
      username,
      password,
      usernameError,
      passwordError,
      isRevealPassword,
    } = this.state;
    
    return (
      <div className="login-block">
        {isLoading && <Loader />}
        <div className="wrapper">
          <h1 className="title">Sign In to test</h1>
          <div className="form">
            <InputField
              error={usernameError}
              onChange={(username) => this.setState({username})}
              placeholder="Username"
              type="text"
              value={username}
            />
            <div className="password-wrap">
              <InputField
                error={passwordError}
                onChange={(password) => this.setState({password})}
                placeholder="Password"
                type={isRevealPassword ? "text" : "password" }
                value={password}
              />
              <PasswordEye 
                className={`${isRevealPassword ? "visibility" : "nonvisibility" }`}
                onClick={() => this.togglePassword()}
              />
            </div>
            <Button
              label="Sign In" className="btn-green" onClick={() => this.validateForm()}
            />
          </div>
        </div>
      </div>
    )
  }
}

function bindActions(dispatch) {
  return {
    setUserLogin: () => dispatch({ type: msg.SET_USER_LOGIN }),
  };
}

export default connect(null, bindActions)(LoginBlock);