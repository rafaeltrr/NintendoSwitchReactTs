import * as S from './style'
import { Button } from '../Button';
import { Analogic } from '../Analogic'
import * as React from 'react'

export function LeftController(): JSX.Element {

    // const [isOpen, setIsOpen] = useState(false);

    return (
        <S.controll>
            <S.topControll>
                <Button icon left  />
            </S.topControll>
            <S.middleControll>
                <S.rowControll>
                    <Analogic />
                </S.rowControll>
                
                <S.rowControll top>
                    <Button>X</Button>
                </S.rowControll>
                <S.rowControll space>
                    <Button>Y</Button>
                    <Button>A</Button>
                </S.rowControll>
                <S.rowControll>
                    <Button>B</Button>
                </S.rowControll>

            </S.middleControll>
            <S.bottomControll>
                <Button />
            </S.bottomControll>
        </S.controll>
    );
}