import styled from 'styled-components';

export const controll = styled.div`
    width: 15%;
    height:720px;
    background-color: #ff4136;
    border-radius: 0px 130px 130px 0px;
    display: flex;
    flex-direction: column;
    /* efeito de profundidade */
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
`

export const topControll = styled.div`
    display: flex;
    flex-grow: 1;
`

export const middleControll = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 20;
`

export const bottomControll = styled.div`
    display: flex;
    flex-grow: 10;
`

export const rowControll = styled.div<{ space?: boolean, top?: boolean }>`

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    ${() => (prop: any) => {
        if(prop.space){
            return `
              justify-content: space-evenly;
            `
        }
        if(prop.top){
            return `
              margin-top: 40px;
            `
        }
    }}
`

