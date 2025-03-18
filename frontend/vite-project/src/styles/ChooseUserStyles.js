// ChooseUserStyles.js
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ChooseUserContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
   width: 2000px;
  background-color:#ffffff; /* Playful yellow background color */

  @media screen and (min-width: 200px) {
    flex-direction: row;
    justify-content: space-evenly; /* Spread items evenly horizontally */
    align-items: center;
  }
`;

export const UserSection = styled.div`
  text-align: center; /* Center text */
  padding-top: 200px;

  @media screen and (min-width: 768px) {
    padding-top: 0;
    margin: 20px;
    text-align: center; /* Align text to the left for larger screens */
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333333; /* Admin: Orange color */

  @media screen and  {
 
    font-size: 20px;
  }
`;

export const Button = styled(Link)`
  background-color: rgba(58, 4, 4, 0.32); /* Student: Light green color */
  color: white;
  border: none;
  padding: 10px 20px;
  margin-top: 10px;
  text-decoration: none;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(210, 53, 53, 0.45); /* Darker shade of green on hover */
  }

  @media screen and (max-width: 768px) {
    padding: 8px 16px;
    font-size: 14px;
  }
`;
