import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        margin: 0;
        width: 100%;
        font-size: 16px;
    }

    body, input, button {
        font-family: 'Roboto Slab', serif;
        color: ${props => props.theme.colors.text};
    }

    h1, h2, h3, h4, h5, h6, b, strong {
        font-weight: 500;
    }

    .App {
        min-height: 100vh;
        background-color: ${props => props.theme.colors.background};
    }
    
    button {
        cursor: pointer;
    }

    a {
        text-decoration: none;
        color: ${props => props.theme.colors.primary};
        display: flex;
        align-items: center;
        transition: all .3s ease;

        svg {
            margin-right: 18px;
        }

        &:hover {
            opacity: .7;
        }
    }
`