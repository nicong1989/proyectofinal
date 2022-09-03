import React from 'react';
import {StyledCont} from './Contador.styled';

const Contador = () => {
    return (
        <div>
            <StyledCont>
                <h1 style={{fontSize: '13px'}}>0</h1>
            </StyledCont>
        </div>
    );
}

export default Contador;
