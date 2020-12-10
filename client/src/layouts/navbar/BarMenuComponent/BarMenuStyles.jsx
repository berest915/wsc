import styled from 'styled-components'
import { WS_GREEN } from '../../../const/css-constant'

export const BurgerDiv = styled.div`
  font-size: 1.7rem;
  cursor: pointer;
  display: flex;
  align-self: center;
  padding: 10px;
`;

export const MobileSidebar = styled.div`
  background-color: ${WS_GREEN};
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  right: -100vw;
  transition: 450ms;

  ${props =>
    props.sidebar &&
    `
      right: 0;
      transition: 350ms;
    `}

  display: flex;
  flex-direction: column;

  .close-bar-menu {
    font-size: 2rem;
    height: 12vh;
    padding: 0rem 4%;

    display: flex;
    align-items: center;
    justify-content: flex-start;
    .logo-div {
      display: flex;
      span {
        font-size: x-small;
        padding-left: 5px;
      }
    }

    .close-icon-div{
      margin-left: auto;
      font-size: 1.7rem;
      padding: 10px;
      transition: background-color 0.5s ease;
      :hover {
        cursor: pointer;
        background-color: lightblue;
        color: black;
        border-radius: 5px;
      }
      display: flex;
      align-items: center;
    }
  }

  .bar-menu-item {
    list-style: none;
    padding: 20px;
    margin: 0 50px;
    transition: background-color .6s ease;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    :hover {
      cursor: pointer;
      background-color: lightblue;
      border-radius: 5px;

      color: black;
    }
   
      text-decoration: none;
      font-size: 1rem;
      color: white;
    
  }
`;
