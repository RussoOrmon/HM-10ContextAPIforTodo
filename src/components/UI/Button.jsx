import React from 'react'
import styled from 'styled-components';

const Button = ({children}) => {
  return (
    <Container>{children}</Container>
  )
}

export default Button;

const Container=styled.button`
    background-color: #8A2B06;
    padding: 10px 32px;
    color: #ffffff;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    border-radius: 16px;
    border: none;


    &:hover{
        background-color:#7E2A0A ;
    }

    &:active{
        background-color:#993108 ;
    }

    &:disabled{
        background-color:#CAC6C4 ;
    }
`