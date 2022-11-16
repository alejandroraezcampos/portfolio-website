import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import fontawesome from '@fortawesome/fontawesome'
import styled from 'styled-components';
import Navlink from './Navlink';
import Brand from './Brand';
import Button from './Button';
import { useState } from 'react';

type Menu = {
    isOpened: boolean
}

const NavContainer = styled.div`
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
`;

const RightContent = styled.div`
    display: flex;
    align-items: center;
    @media (max-width: 992px) {
        display: none;
    }
`
const ToogleMenu = styled.i`
    display: block;
    @media(min-width: 992px) {
        display: none;
    }
`
// Navigation 
const Navigation = styled.ul`
    list-style-type: none;
    @media (max-width: 992px) {
        display: none;
    }
`;
const LinkItem = styled.li`
    margin-right: 56px;
    display: inline;
`;
const DarkSwitch = styled.i`
    margin-right: 32px;
`;

const ResponsiveMenu = styled.ul<Menu>`
    padding: 0;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background: #ffffff;
    z-index: 999;
    list-style-type: none;
    display: ${  props =>  props.isOpened ? 'block' : 'none' };
`;

const ResponsiveMenuItem = styled.li`
    padding: 20px;
    border-bottom: 1px solid #F1F1F1;
    i {
        margin-right: 10px;
    }
`
const Navbar = () => {
    const [isOpened, setOpen] = useState(false)
    
    const handleMenu = (event:any) => {
        setOpen(!isOpened);
    }
    return (
        <NavContainer>
            <Brand />
            <Navigation>
                {['Servicios', 'Portfolio', 'Experiencias', 'Blog']
                .map( (itemMenu) => (
                <LinkItem key={`key-${itemMenu}`}>
                    <Navlink>{itemMenu}</Navlink>
                </LinkItem>
                ))}
            </Navigation>
            <ToogleMenu className="fa-solid fa-bars"
            onClick={handleMenu}/>
            <ResponsiveMenu isOpened={isOpened}>
                <ResponsiveMenuItem>
                    <i className="fa-solid fa-microchip"></i> 
                    Servicios</ResponsiveMenuItem>
                <ResponsiveMenuItem>
                    <i className="fa-solid fa-code"></i>
                    Portfolio</ResponsiveMenuItem>
                <ResponsiveMenuItem>
                    <i className="fa-solid fa-folder"></i>
                    Experiencias</ResponsiveMenuItem>
                <ResponsiveMenuItem>
                    <i className="fa-solid fa-rss"></i>
                    Contacto</ResponsiveMenuItem>    
                <ResponsiveMenuItem>
                    <i className="fa-solid fa-address-book"></i>
                    Contacto</ResponsiveMenuItem>
            </ResponsiveMenu>
            <RightContent>
                <Button>Curriculum</Button>
            </RightContent>
        </NavContainer>

    )
}

export default Navbar;