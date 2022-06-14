import * as React from 'react'
import * as S from './styled'
import Profile from '../Profile'

export const Header: React.FC = () => {
    //pegar a hora atual usando o formato pm am 
    const now = new Date().toLocaleString('pt-BR', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    })

    const hour = now.split(' ')[0]
    const text = now.split(' ')[1]
    
    return (
        <S.Main>
            <S.LineOne>
                <Profile src="src/assets/img/profile/mario.webp"/>
                <Profile src="src/assets/img/profile/luigi.jpg"/>
            </S.LineOne>
            <S.LineTwo>
                <S.Hour>{hour}</S.Hour>
                <S.Small>{text}</S.Small>
                <S.Icon className="fa fa-wifi" aria-hidden="true"></S.Icon>
                <S.Percent>50</S.Percent>
                <S.Small>%</S.Small>
                <S.Icon className="fa fa-battery-half" aria-hidden="true"></S.Icon>
            </S.LineTwo>
        </S.Main>
    )
}