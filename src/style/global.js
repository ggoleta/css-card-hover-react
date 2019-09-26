import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html,
    body,
    #root {
        min-height: 100vh;
        -webkit-font-smoothing: antialiased !important;
    }

    body {
        background: #333;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
