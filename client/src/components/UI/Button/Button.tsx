import React, {FC, ReactNode} from 'react';
import cl from './Button.module.css'

interface ButtonProps {
    children?: ReactNode,
    href?: string,
    wide?: boolean,
    target?: string
    onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
}

const Button: FC<ButtonProps> = ({wide,onClick,target,href, children}) => {
    const w = wide ? cl.wide : '';
    return (<a href={href} target={target} onClick={onClick} className={[cl.btn, cl.btnWhite, w].join(' ')}>{children}</a>

    );
};

export default Button;
