import styled from "styled-components";

export const analogic = styled.div<{fisic?: boolean, middleware?: boolean}>`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: #666565;
    
    ${() => (prop: any) => {
        if(prop.fisic){
            return `
            //   sobrepor ao analogico
            position: absolute;
            background-color: #494949;
            z-index: 1;
            `
        }
        if(prop.middleware){
            return `
            position: absolute;
            background-color: #555050;
            width: 60px;
            height: 60px;
            z-index: 1;
            box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);

            `
        }
    }}
`