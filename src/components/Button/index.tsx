import * as S from './style'
import { IButtonProps } from './IProps'


export const Button: React.FC<IButtonProps> = (props:IButtonProps) => (
    <S.Button {...props} />
)
