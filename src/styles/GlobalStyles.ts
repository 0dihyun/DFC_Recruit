import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        color: #1C334F;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body {
        background-color: #E1EAF4;
        width: 100%;
        height: 100%;
        font-family: "Pretendard", sans-serif;
        scroll-behavior: smooth;
    }

    ul, ol {
        list-style: none;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    button {
        border: none;
        background: none;
        cursor: pointer;
    }

    img {
        border-radius: 10px;
        max-width: 100%;
        height: auto;
    }

    ::-webkit-scrollbar {
    width: 0;
    }
    
`;

export default GlobalStyle;
