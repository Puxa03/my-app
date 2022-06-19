import React, { useState } from "react";
import { addUser } from "../../database/db";
import { Container } from "./styles";




function Register() {

  const onChange = (e) => {
      const { name, value } = e.target;
      setForm(prev => ({ ...prev, [name]: value }))
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(form)
    setForm(init)
  };
  const init = {
    userName: "",
    email: "",
    password: "",
  };
  const [form, setForm] = useState(init)
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="userName" value={form.userName}  onChange={onChange} required />
        </div>
        <div className="input-container">
          <label>Email </label>
          <input type="text" name="email" value={form.email}  onChange={onChange} required />

        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="password" value={form.password}  onChange={onChange} required />
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <Container>
      <div className="app">
        <div className="login-form">
          <div className="title">Register</div>
          {renderForm}
        </div>
      </div>
    </Container>
  );
}

export default Register;