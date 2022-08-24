import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <Wrapper>
        <h1 className='center'>
            <Link to='/'>
                <img src={logo} alt='logo' className='logo'/>
            </Link>
        </h1>
        <div className='center'>
            <ul role="list">
                <li>home</li>
                <li>account</li>
                <li>wallets</li>
                <li>buy/sell</li>
                <li>markets</li>
                <li>settings</li>
                <li>ad pages</li>
            </ul>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.aside`
    h1 {
        text-align: center
    }
    .logo {
        width: 75px;
        height: 75px;
    }
    ul {
        text-align: center
    }
    `

export default Sidebar