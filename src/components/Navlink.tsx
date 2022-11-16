import React from 'react';
import styled from 'styled-components';

type Props = {
    children: string;
    isActive?: boolean,
};
type LinkProps = {
    isActive?: boolean
};
const StyledLink = styled.a<LinkProps>`
    color: #232E35;   
    text-decoration: none;
    font-size: 16px;
    font-family: 'Inter', sans-serif;`;

const Navlink = ({children, isActive = false}: Props) => {
    return (
        <StyledLink 
            isActive={isActive}>
            {children}
        </StyledLink>       
    )
    
}

export default Navlink;