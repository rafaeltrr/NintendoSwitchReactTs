import * as S from './style'
import { IButtonProps } from './IProps'
import * as React from 'react'


export const Button: React.FC<IButtonProps> = (props:IButtonProps) => (
    <S.Button {...props} />
)
