import React from 'react';
import {StyledCont} from './Contador.styled';

const Contador = () => {
    return (
        <div>
            <StyledCont>
                <h1 id="cartIng" style={{ backgroundColor:"#a98f3b",fontSize: '17px', borderRadius:"5px", width:"12px"}}>0</h1>
            </StyledCont>
        </div>
    );
}

export default Contador;
