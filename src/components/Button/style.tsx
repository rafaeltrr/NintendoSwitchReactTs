import styled from "styled-components";
import { IButtonProps } from "./IProps";

export const Button = styled.button<IButtonProps>`
    width: 40px;
    height: 40px;
    background-color: #494949;
    border-style: solid;
    border-radius: 50%;
    color: whitesmoke;
    
    ${() => (prop: IButtonProps) => {
        if (prop.icon) {
            return `
                background-image: url("src/assets/img/plus.png");
                background-repeat: no-repeat;
                background-position: center;
                background-size: contain;
                border-style: none;
                width: 70px;
                height: 70px;
                margin-left: 10px;
                margin-top: 10px;
                background-color: ${prop.right ? '#ff4136' : '#0bf5e1'};
                margin-left: ${prop.left ? '120px' : '10px'};


            `
        } 
    }};
    /* piscar quando clicar */
    &:active {
        animation: pulse 1s normal;
    }
    @keyframes pulse {
        0% {
            transform: scale(1.2);
        }
        50% {
            transform: scale(1);
        }
        
    }


`