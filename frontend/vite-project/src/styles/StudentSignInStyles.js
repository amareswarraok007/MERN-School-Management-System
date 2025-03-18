// StudentSignInStyles.js
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StudentSignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background:#ffffff; /* Gradient background */
  height: 100vh; /* Full height of the viewport */
  width: 100vw;
  color:#333333;
  padding: 3vh;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8vh;
  height: 30vh;
  width: 30vw; /* Limit form width */
  padding: 50px;
  border: 1px solidrgb(33, 19, 19);
  border-radius: 8px;
  background-color:#ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color:black;
`;

export const InputField = styled.input`
  width: 70%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: transparent;
  color: black;
`;

export const SubmitButton = styled(Link)`
  width: 20%;
  padding: 12px;
  margin-top: 20px;
  border: none;
  border-radius: 8px;
  background-color:rgba(58, 4, 4, 0.32);
  color: black;
  font-size: 18px;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color:rgba(210, 53, 53, 0.45);
  }

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;
