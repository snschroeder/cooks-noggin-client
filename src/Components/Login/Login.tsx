import React, { useEffect, useState } from 'react';

export default function Login(props) {
  const [error, setError] = useState(null);

  const handleLoginSuccess = () => {
    props.history.push('/');
  };

  const handleSubmit = (e) => {
    const { username, password } = e.target;
    setError(null);

    AuthApiService.postLogin({
      username: username.value,
      password: password.value,
    })
      .then((res) => {
        username.value = '';
        password.value = '';
        
      })
  }

  return (
    <section className="login-component">
      <h2>Login</h2>
      <form className="login-form" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="login-username-input" aria-label="unsername input">
          Username
          <input
            type="text"
            id="login-username-input"
            name="username"
            required
          />
        </label>
        <label htmlFor="login-password-input" aria-label="password input">
          Password
          <input
            type="password"
            id="login-password-input"
            name="password"
            required
          />
        </label>
      </form>
    </section>
  )
}