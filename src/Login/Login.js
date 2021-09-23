import React, { Component } from "react";

export default class Login extends Component {
  render() {
    return (
      <div class="auth-wrapper">
        <div class="auth-content">
          <div class="card">
            <div class="card-body text-center">
              <div class="mb-4">
                <i class="feather icon-unlock auth-icon"></i>
              </div>
              <h3 class="mb-4">Login</h3>
              <div class="input-group mb-3">
                <input
                  type="email"
                  class="form-control"
                  placeholder="email@example.com"
                />
              </div>
              <div class="input-group mb-4">
                <input
                  type="password"
                  class="form-control"
                  placeholder="password"
                />
              </div>
              {/* <div>
              <input class="" name="agreement" type="checkbox"  value="" checked=""/>
              <span class="">Remeber me</span>

              </div> */}

              <button class="btn btn-primary shadow-2 mb-4">Login</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
