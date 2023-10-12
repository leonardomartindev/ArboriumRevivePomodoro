import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: "arial", sans-serif;
        box-sizing: border-box;
    }
    html{
        font-size: 62.5%;
        overflow: hidden;

        @media(max-width: 600px){
          font-size: 45%;
      }
    }
    a{
        text-decoration:none;
        color: inherit;
    }
    h1{
        font-family: 'Orbitron', sans-serif;
    }
    p{
        font-family: 'Space Mono', monospace;
    }
    .fade-enter {
        opacity: 0;
      }
      
      .fade-enter-active {
        opacity: 1;
        transition: opacity 300ms;
      }
      
      .fade-exit {
        opacity: 1;
      }
      
      .fade-exit-active {
        opacity: 0;
        transition: opacity 300ms;
      }
      
`