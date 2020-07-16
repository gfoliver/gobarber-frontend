import styled from 'styled-components'

interface TooltipProps {
    color: string
    textColor: string
}

export const Container = styled.div<TooltipProps>`
    position: relative;

    span {
        background-color: ${props => props.color};
        position: absolute;
        bottom: calc(100% + 12px);
        width: 160px;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 4px;
        padding: 8px;
        font-size: 13px;
        opacity: 0;
        transition: all .3s ease;
        visibility: hidden;

        &:before {
            content: '';
            border: solid 6px transparent;
            border-top-color: ${props => props.color};
            position: absolute;
            top: 100%;
            left: 50%;
            transform: translateX(-50%);
        }
    }

    svg {
        margin: 0;

        :hover ~ span {
            opacity: 1;
            visibility: visible;
        }
    }
`