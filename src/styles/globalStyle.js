import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;

  }
  body {
    font-family: ${(props) => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.primary};
    cursor: default;
    overflow-x: hidden;
  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${(props) => props.theme.fonts.title};
  }
  a, button {
    text-decoration: none;
    color: rgba(255, 255, 255, 0.75);
    transition: 0.3s ease;
    position: relative;
    left: 0;
    border: none;
    background: none;
    cursor: pointer;

    &:hover {
      color: #fff;
      left: 6px;
    }
  }
  li{
    list-style: none;
  }

  form {
    display: flex;
    flex-direction: column;
    max-width: 600px;
    margin: auto;

    input {
      margin: 10px 0;
      padding: 5px;
    }
    button {
      margin: 10px 0;
    }
  }

`;

export default GlobalStyle;
