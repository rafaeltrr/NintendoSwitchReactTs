import * as React from 'react'
import { LeftController } from "../../components/LeftControll"
import { RightController } from "../../components/RightControll"
import { Screen } from "../../components/Screen"

import * as S from './styled'
export const Home: React.FC = () => {

    return (
        <>
            <S.Nswitch>
                <LeftController/>
                <Screen/>
                <RightController/>
            </S.Nswitch>
        </>
    )
}