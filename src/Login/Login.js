import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import AuthService from "../services/auth.service";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      email: "",
      password: "",
      loading: false,
      message: "",
    };
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  handleLogin(e) {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true,
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.login(this.state.email, this.state.password).then(
        () => {
          this.props.history.push("/lan_view");
          window.location.reload();
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            loading: false,
            message: resMessage,
          });
        }
      );
    } else {
      this.setState({
        loading: false,
      });
    }
  }
  render() {
    return (
      <div class="auth-wrapper">
        <div class="auth-content">
          <div class="card">
            <div class="card-body text-center">
              <div class="mb-4">
                <i class="feather icon-unlock auth-icon"></i>
              </div>
              <Form
                onSubmit={this.handleLogin}
                ref={(c) => {
                  this.form = c;
                }}
              >
                <h3 class="mb-4">Login</h3>
                <div class="input-group mb-3">
                  <input
                    type="email"
                    value={this.email}
                    class="form-control"
                    placeholder="email@example.com"
                    validations={[required]}
                    onChange={this.onChangeEmail}
                  />
                </div>
                <div class="input-group mb-4">
                  <input
                    type="password"
                    value={this.password}
                    class="form-control"
                    placeholder="password"
                    onChange={this.onChangePassword}
                  />
                </div>

                <button
                  class="btn btn-primary shadow-2 mb-4"
                  type="submit"
                  disabled={this.state.loading}
                >
                  LOG IN
                </button>
                {this.state.message && (
                  <div className="form-group">
                    <div className="alert alert-danger" role="alert">
                      {this.state.message}
                    </div>
                  </div>
                )}
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
