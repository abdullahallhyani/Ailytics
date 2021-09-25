import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Login({ setToken }) {
  //useStat for the log in
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function loginUser(credentials) {
    return fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    }).then((data) => data.json());
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      email,
      password,
    });
    setToken(token);
  };
  // //login function
  // function loginHandler(e) {
  //   e.preventDefault();
  //   console.log(password, email);
  //   const token = "1234";
  //   if (password == "123") {
  //     localStorage.setItem("token", token);
  //     localStorage.setItem("email", email);
  //   } else {
  //     alert("invalid password or emaile wrong");
  //   }
  // }
  return (
    <div class="auth-wrapper">
      <div class="auth-content">
        <div class="card">
          <div class="card-body text-center">
            <div class="mb-4">
              <i class="feather icon-unlock auth-icon"></i>
            </div>
            <form onSubmit={handleSubmit}>
              <h3 class="mb-4">Login</h3>
              <div class="input-group mb-3">
                <input
                  type="email"
                  value={email}
                  class="form-control"
                  placeholder="email@example.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div class="input-group mb-4">
                <input
                  type="password"
                  value={password}
                  class="form-control"
                  placeholder="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button
                class="btn btn-primary shadow-2 mb-4"
                type="submit"
              ></button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
