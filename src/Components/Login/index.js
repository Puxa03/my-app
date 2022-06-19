import React, { useState } from "react";
import { loginUser } from "../../database/db";
import { Container } from "./styles";
import { useNavigate } from "react-router-dom";



function Login({setLoggedUser}) {
  const onChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }))
}


  const navigate = useNavigate();
  const handleSubmit = (e) => {
      e.preventDefault();
      const loggedUser = loginUser(form);
      
      if(loggedUser){
        localStorage.setItem("user",JSON.stringify(loggedUser));
        setLoggedUser(loggedUser);
        navigate("/home")
      }
      
  };

  const init = {
    email: "",
    password: "",
  };

  const [form, setForm] = useState(init)
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>

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
          <div className="title">Sign In</div>
          {renderForm}
        </div>
      </div>
    </Container>
  );
}

export default Login;