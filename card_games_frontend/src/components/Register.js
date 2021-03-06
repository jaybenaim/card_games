import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import Api from "../assets/api/api";
import "../assets/stylesheets/register.css";
class Register extends Component {
  state = {
    username: "",
    password: ""
  };
  handleUsername = e => {
    const username = e.target.value;
    this.setState({ username });
  };
  handlePassword = e => {
    const password = e.target.value;
    this.setState({ password });
  };
  handleSubmit = e => {
    const { login, signup, toggleForm } = this.props;
    const { username, password } = this.state;
    const data = { username, password };
    if (login) {
      Api.post("authenticate/", data)
        .then(res => {
          localStorage.token = res.data.token;
          localStorage.id = res.data.id;
          localStorage.username = res.data.username;
          localStorage.userUrl = `https://jays-card-games.herokuapp.com/users/${res.data.id}/`;
          toggleForm();
          window.location.reload(true);
        })
        .catch(err => {
          console.log(err);
          alert("Something went wrong");
        });
    }
    if (signup) {
      Api.post("users/", data)
        .then(res => {
          localStorage.token = res.data.token;
          localStorage.id = res.data.id;
          localStorage.username = res.data.username;
          localStorage.userUrl = `https://jays-card-games.herokuapp.com/users/${res.data.id}/`;

          toggleForm();
          window.location.reload(true);
        })
        .catch(err => {
          console.log(err);
          alert("Something went wrong");
        });
    }
  };
  render() {
    const { props } = this;
    return (
      <>
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <div className="container">
            <div className="d-flex justify-content-center h-100">
              <div className="card">
                <div className="card-header">
                  <h3>
                    {props.login === "login" && "Sign in"}
                    {props.signup === "signup" && "Sign up"}
                  </h3>
                </div>
                <div className="card-body">
                  <form>
                    <div className="input-group form-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="fas fa-user"></i>
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="username"
                        onChange={this.handleUsername}
                      />
                    </div>
                    <div className="input-group form-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="fas fa-key"></i>
                        </span>
                      </div>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="password"
                        onChange={this.handlePassword}
                      />
                    </div>

                    <div className=""></div>
                  </form>
                  <button
                    className="btn float-right login_btn"
                    onClick={() => this.handleSubmit()}
                  >
                    Submit
                  </button>
                </div>

                <div className="card-footer">
                  {props.login ? (
                    <div className="d-flex justify-content-center">
                      <a href="javascript:history.back()">
                        Forgot your password?
                      </a>
                    </div>
                  ) : (
                    <div className="d-flex justify-content-center">
                      <a
                        className="login-modal-link"
                        href="javascript:history.back()"
                      >
                        Login
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </>
    );
  }
}

export default Register;
