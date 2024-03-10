import React from "react";
import styled from "styled-components";

const StyledFooter = styled.header`
    display:flex;
    align-items:center;
    justify-content:center;
    padding: 20px 10px;
    background: #525252;
    color: #fff;
    font-size:16px;
    line-height:1.2;
`
export const Footer = () =>  {
 return (<StyledFooter> Food APP &copy; 2024 </StyledFooter>)
}