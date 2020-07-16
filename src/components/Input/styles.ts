import styled from 'styled-components'

export const Container = styled.label`
    display: block;
    background-color: ${props => props.theme.colors.inputBackground};
    display: flex;
    align-items: center;
    margin-bottom: 8px;
    border-radius: 10px;
    padding: 18px;
    width: 100%;
    
    svg {
        margin-right: 18px;
        width: 16px;
    }

    input {
        padding: 0;
        background-color: ${props => props.theme.colors.inputBackground};
        margin: 0;
        border: none;
        font-size: 16px;
        flex: 1;
        
        &::placeholder {
            color: ${props => props.theme.colors.textLight};
        }

        &:active,
        &:focus {
            outline: none;
            box-shadow: none;
        }
    }

    svg + input {
        max-width: calc(100% - 34px);
    }
`