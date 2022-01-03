import React from 'react'
import {DivHeader} from './header.style';
import {Button, Container} from '@mui/material';
import { IPropsHeader } from '../../models/header.model';

const Header: React.FC<IPropsHeader> = (
    {heading, btn, handleCLick}
) => {
    return (
        <>
           <DivHeader>
               <Container maxWidth="xl" className="header-container">
                   <h3>{heading}</h3>
                   {
                       btn === undefined ? '' : <Button onClick={handleCLick} variant="contained" size="small">{btn}</Button>
                   }
               </Container>
           </DivHeader>
        </>
    )
}

export default Header;
