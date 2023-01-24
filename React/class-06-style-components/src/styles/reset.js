// import styled from "styled-components";
import { createGlobalStyle } from "styled-components";



export default createGlobalStyle`
    :root {
        font-size: 62.5%;
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body, button, select, textarea{
        font-size: 1.6rem;
        background: ${(props) => props.theme.Color.background};
        color: ${(props) => props.theme.Color.font};
        font-family: Arial, Helvetica, sans-serif;
    }
   

`
