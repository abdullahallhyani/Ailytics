import React, { useState } from "react";

export default function Login() {
  //useStat for the log in
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //login function
  function loginHandler(e) {
    e.preventDefault();
    console.log(password, email);
    const token = "1234";
    if (password == "123") {
      localStorage.setItem("token", token);
      localStorage.setItem("email", email);
    } else {
      alert("invalid password or emaile wrong");
    }
  }
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
              onClick={loginHandler}
              type="submit"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
