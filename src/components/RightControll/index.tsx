import * as S from './style'
import { Button } from '../Button';
import { Analogic } from '../Analogic';
export function RightController(): JSX.Element {

    // const [isOpen, setIsOpen] = useState(false);

    return (
        <S.controll>
            <S.topControll>
                <Button icon right />
            </S.topControll>
            <S.middleControll>
                <S.rowControll>
                    <Button>X</Button>
                </S.rowControll>
                <S.rowControll space>
                    <Button>Y</Button>
                    <Button>A</Button>
                </S.rowControll>
                <S.rowControll>
                    <Button>B</Button>
                </S.rowControll>
                <S.rowControll top>
                    <Analogic/>
                </S.rowControll>
            </S.middleControll>
            <S.bottomControll>
                <Button />
            </S.bottomControll>
        </S.controll>
    );
}