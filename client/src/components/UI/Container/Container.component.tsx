import React, {FC, ReactNode} from 'react';
import cl from './Container.module.css'
export type ContainerProps = {
    children?: ReactNode
}

const Container: FC<ContainerProps> = ({children}) => {
    return (
        <div className={cl.container}>
            {children}
        </div>
    );
};

export default Container;
