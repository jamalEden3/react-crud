import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import user from '../assets/user.jpg'

import { BiAlignJustify } from "react-icons/bi";
import { BiMessageSquare } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { GrNotification } from "react-icons/gr";
import { BsFillCartPlusFill } from "react-icons/bs";

/* componnts */
import { Chat, Cart, Notification, UserProfile } from './index';

/* contxt */
import { useStateContext } from '../contexts/ContextProvider';

const NavButton = ({color, customFunc, icon}) => (
  <button type="button" style={{color: color}} onClick={customFunc} className="nav-button">
    <span>
    </span>
    <div>{icon}</div>
  </button>
);


function Navbar() {
  
  const { activeMenu, setActiveMenu, handleClicked, btnIsClicked, screenSize, setScreenSize } = useStateContext();


  useEffect(() => {
    const handleScreenSize = () => setScreenSize(window.innerWidth);

      window.addEventListener('resize', handleScreenSize);

      handleScreenSize();
    
  
    return () => window.removeEventListener('resize', handleScreenSize)
    
  }, []);


  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  },[screenSize]);
  


  return (
    <Wrapper className='flex'>
      <NavButton 
        color="#808" 
        customFunc={() => setActiveMenu(true)} 
        icon={<BiAlignJustify />} 
      />

        <div className='flex nav-list'>
          <div className='nav-item'>
            <NavButton 
              color="#808" 
              customFunc={() => handleClicked("notification")} 
              icon={<GrNotification />} />
              {btnIsClicked.notification && <Notification className='nav-link' />}
          </div>
          
          <div className="nav-item">
            <NavButton 
              color="#808" 
              customFunc={() => handleClicked("chat")} 
              icon={<BiMessageSquare />} />
              {btnIsClicked.chat && <Chat className='nav-link' />}
          </div>
          <div className="nav-item">
            <NavButton 
              color="#808" 
              customFunc={() => handleClicked("cart")} 
              icon={<BsFillCartPlusFill />} />
              {btnIsClicked.cart && <Cart className='nav-link' />}
          </div>
          <div className='nav-item'>
            <div className='user'>
              <img alt="user" src={user}/>
              <p>
                <span>Hi</span>{' '},
                <span className='usr-name'>Jamal</span>
              </p>
            </div>
            {btnIsClicked.userprofile && <UserProfile className='nav-link' />}
          </div>

        </div> {/* NavButton group */}
    </Wrapper>
  )
}

const Wrapper = styled.nav`
    justify-content: space-between;

    .nav-list {
      align-items: center;
    }

    button {
      font-size: 1.5rem;
    }

    img {
      width: 70px;
      height: 70px;
      border-radius: 50%;
      padding: 0.5rem;
    }
    .nav-link {
      
      
    }

    .nav-item {
      position: relative;
    }

    .nav-button {

    }
`

export default Navbar