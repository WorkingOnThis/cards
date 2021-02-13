import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

    body {
        margin: 0;
        min-height: 100%;
        padding: 0;
        scroll-behavior: smooth;
    }

    *:focus {
        outline: 0;
    }

    button, select, html, textarea, input {
        font-family: Roboto,"Helvetica Neue",sans-serif;
    }

    button {
        appearance: auto;
        /* -webkit-writing-mode: horizontal-tb !important; */
        text-rendering: auto;
        /* color: -internal-light-dark(black, white); */
        letter-spacing: normal;
        word-spacing: normal;
        text-transform: none;
        text-indent: 0px;
        text-shadow: none;
        display: inline-block;
        text-align: center;
        align-items: flex-start;
        cursor: default;
        /* background-color: -internal-light-dark(rgb(239, 239, 239), rgb(59, 59, 59)); */
        box-sizing: border-box;
        margin: 0em;
        font: 400 13.3333px Arial;
        padding: 1px 6px;
        border-width: 2px;
        border-style: outset;
        /* border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133)); */
        border-image: initial;
    }
`
export default GlobalStyle