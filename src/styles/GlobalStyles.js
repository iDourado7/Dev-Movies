import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    text-decoration: none;
    font-family: "Roboto", sans-serif;
}

body, HTML{
    background: #000000;
    overflow-x: hidden;
    width: 100%;
    min-height: 100%;
}
`