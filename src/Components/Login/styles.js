import styled from "styled-components";

export const Container = styled.div`
.app {
    font-family: sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    height: 100vh;
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
    background-color: #f8f9fd;
  }
  
  input[type="text"],
  input[type="password"] {
    height: 25px;
    border: 1px solid rgba(0, 0, 0, 0.2);
  }
  
  input[type="submit"] {
    margin-top: 10px;
    cursor: pointer;
    font-size: 15px;
    background: #01d28e;
    border: 1px solid #01d28e;
    color: #fff;
    padding: 10px 20px;
  }
  
  input[type="submit"]:hover {
    background: #6cf0c2;
  }
  
  .button-container {
    display: flex;
    justify-content: center;
  }
  
  .login-form {
    background-color: white;
    padding: 2rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  
  .list-container {
    display: flex;
  }
  
  .error {
    color: red;
    font-size: 12px;
  }
  
  .title {
    font-size: 25px;
    margin-bottom: 20px;
  }
  
  .input-container {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin: 10px;
  }
`;