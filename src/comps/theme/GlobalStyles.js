import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    body {
        background-color: ${(props) => props.theme.body};
        color: ${(props) => props.theme.fontColor};
        transition: all .5s linear;
    }
    `

    export const lightTheme = {


    };
    
    export const darkTheme = {
        body: "#000",
        fontColor: "#fff",
    };