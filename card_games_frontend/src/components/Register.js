import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
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
    const { username, password } = this.state;
    const data = { username, password };
    Api.post("users/", data)
      .then(res => {
        console.log(res.statusText);
        // set window.
      })
      .catch(err => {
        console.log(err);
      });
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
                  <h3>Sign In</h3>
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
                    <div className="row align-items-center remember">
                      <input type="checkbox" />
                      Remember Me
                    </div>
                    <div className="form-group"></div>
                  </form>
                </div>
                <button className="" onClick={() => this.handleSubmit()}>
                  Submit
                </button>
                <div className="card-footer">
                  <div className="d-flex justify-content-center links">
                    Don't have an account?<a href="#">Sign Up</a>
                  </div>
                  <div className="d-flex justify-content-center">
                    <a href="#">Forgot your password?</a>
                  </div>
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
