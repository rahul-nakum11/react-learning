import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding: 20px 10px;
    background: #f0f0f0;
    color: #fff;
    font-size:16px;
    line-height:1.2;
`
const StyledLogo = styled.img`
    width:120px;
    height:80px;
    border: 1px solid #f0f0f0f0;
    border-radius:4px;
`
const StyledLink= styled.a`
 padding:20px;
`

export const Header = () =>  {
 return (
    <StyledHeader>
            <StyledLogo alt={'company-logo'} src="https://pics.craiyon.com/2023-10-20/8a24fcbb350f4127bfb938659f4b8b84.webp"/>
            <nav>
                <StyledLink href="/">Home</StyledLink> 
                <StyledLink href="/about">About</StyledLink> 
                <StyledLink href="/login">Login</StyledLink> 
            </nav>
    </StyledHeader>
 )
}