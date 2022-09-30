import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';

import HouseSidingIcon from '@mui/icons-material/HouseSiding';
import Person4Icon from '@mui/icons-material/Person4';
import WalletIcon from '@mui/icons-material/Wallet';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SettingsIcon from '@mui/icons-material/Settings';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

const Sidebar = () => {
  return (
    <Wrapper className='flow'>
        <h1>
            <Link to='/'>
                <img src={logo} alt='logo' className='logo'/>
            </Link>
        </h1>
        <div>
            <ul role="list" className='flex center fs-300 flow'>
                <li className='active'><HouseSidingIcon /><span>home</span></li>
                <li><Person4Icon /><span>account</span></li>
                <li><WalletIcon /><span>wallets</span></li>
                <li><ShoppingBasketIcon /><span>buy/sell</span></li>
                <li><ShoppingBagIcon /><span>markets</span></li>
                <li><SettingsIcon /><span>settings</span></li>
                <li><AutoStoriesIcon /><span>ad pages</span></li>
            </ul>
        </div>
        <div className='color-options flex center'>
            <span className='color-option'></span>
            <span className='color-option'></span>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.aside`
    position: fixed;
    top: 0;
    left: 0;
    background-color: #fff;
    flex: 1;
    min-height: 100vh;
    border-right: 1px solid #999;
    flex-direction: column;
    justify-content: space-around;
    --flow-space: 1rem;
  
    h1 {
        margin-top: 2rem
    }
    .logo {
        width: 75px;
        height: 75px;
        margin: 0 auto
    }
    
    ul {
        flex-direction: column;
        text-align: center;
        --flow-space: 1rem;
        
        li {
            display: flex;
            flex-direction: column;
            place-items: center;
            text-transform: capitalize;
            color: var(--clr-neutral-100);
            cursor: pointer;
            
        }
        .active {
            color: var(--clr-neutral-900);
        }
    }
    .color-options {
        --gap: 1rem;
        .color-option {
            width: 20px;
            height: 20px;
            border: 1px solid #000;
            border-radius: 5px;
            &:nth-child(1) {
                background-color: #000;
                cursor: pointer;
            }
            &:nth-child(2) {
                background-color: #fff;
                cursor: pointer;
            }
        }
        }
    `

export default Sidebar