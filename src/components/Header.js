import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { style } from '@mui/system';
import { selectCars } from '../features/car/carSlice'
import { useSelector } from 'react-redux'

function Header() {
    const [menuStatus, setMenuStatus] = useState(false)
    const cars = useSelector(selectCars)

    return (
        <Container>
            <a href='#'>
            <Logo src='/images/logo.svg'></Logo>
            </a>
            <Menu>
                {cars && cars.map((car, index) =>
                    <a key={index} href='#'>{ car }</a>
                )}
                <a href='#'>Solar Roof</a>
                <a href='#'>Solar Panels</a>
            </Menu>
            <RightMenu>
                <a href='#'>Shop</a>
                <a href='#'>Account</a>
                <ButtonMenu onClick = {() => setMenuStatus(true)} href='#'>
                    Menu
                </ButtonMenu>
            </RightMenu>
            <NavMenu show = { menuStatus }>
                <CloseWrapper>
                    <CloseButton onClick = {() => setMenuStatus(false)}/>
                </CloseWrapper>
                <ProductMenu>
                    {cars && cars.map((car, index) =>
                        <li key={index} ><a>{ car }</a></li>
                    )}
                </ProductMenu>
                <li><a href='#'>Existing Inventory</a></li>
                <li><a href='#'>Used Inventory</a></li>
                <li><a href='#'>Trade-In</a></li>
                <li><a href='#'>Test Drive</a></li>
                <li><a href='#'>Powerwall</a></li>
                <li><a href='#'>Commercial Energy</a></li>
                <li><a href='#'>Utilities</a></li>
                <li><a href='#'>Charging</a></li>
                <li><a href='#'>Find Us</a></li>
                <li><a href='#'>Support</a></li>
                <li><a href='#'>Investor Relations</a></li>
                <li><a href='#'>Shop</a></li>
                <li><a href='#'>Account</a></li>
                <li><a href='#'>More</a></li>
            </NavMenu>
        </Container>
    )
}

export default Header

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
`

const Logo = styled.img`
    
`

const Menu = styled.div`
    display: flex;
    align-items:center;
    justify-content: center;
    flex: 1;

    a{
        font-weight: 500;
        padding: 0 10px;
        flex-wrap: nowrap;
    }

    @media (max-width: 1200px){
        display: none;
    }
`

const RightMenu = styled.div`
    display: flex;
    align-items: center;

    a{
        font-weight: 500;
        margin-right: 10px;
    }
`

const ButtonMenu = styled.div`
    width: 80px;
    height: 30px;
    display: flex;
    align-items:center;
    justify-content: center;
    cursor: pointer;
    border-radius: 100px;
    background-color: rgba(0, 0, 0, 0.05);
    font-weight: 500;
`

const NavMenu = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: white;
    width: 300px;
    z-index: 10;
    padding: 30px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? 'opacity: 0': 'opacity: 100'};
    transform: ${props => props.show ? 'translateX(0)': 'translateX(100%)'};
    transition: transform .4s;
    li{
        cursor: pointer;
        padding 10px 10px;
    }
    li:hover{
        background-color: rgba(0, 0, 0, 0.05);
        border-radius: 15px;
        transition: .5s;
    }
    a{
        font-size: 14px;
        font-weight: 400;
    }
`

const ProductMenu = styled.div`
    display: none;

    @media (max-width: 1200px){
        display: block;
    }
`

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    margin-bottom: 30px;
`

const CloseButton = styled(CloseIcon)`
    cursor: pointer;
    padding: 2px;
    :hover{
        background-color: rgba(0, 0, 0, 0.05);
        border-radius: 100px;
        transition: background-color .5s;
    }
`
