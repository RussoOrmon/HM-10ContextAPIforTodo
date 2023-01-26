import React from 'react';
import styled from 'styled-components';

import BasketButton from './BasketButton';

const Header = () => {
  return (
    <Container>

    <Logo>ReactMeals</Logo>
    <BasketButton />
    
    </Container>
  )
}

export default Header;


const Container =styled.div`
width:  100%;
/*height: 101px;*/
position: fixed;
z-index: 90;
top: 0;
background-color:#8A2B06;
display: flex;
justify-content: space-between;
padding: 22px ;
padding-left: 120px;
padding-right: 120px;
align-items: center;
color: white;
`
const Logo =styled.p`
    font-weight: 600;
    font-size: 38px;
    line-height: 57px;
    margin:0 ;
    color: #ffffff;
  



`
