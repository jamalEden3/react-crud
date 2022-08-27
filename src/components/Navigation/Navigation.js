import React from 'react';
import styled from 'styled-components';

import PublicIcon from '@mui/icons-material/Public';
import Brightness6Icon from '@mui/icons-material/Brightness6';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AppsIcon from '@mui/icons-material/Apps';
import SearchIcon from '@mui/icons-material/Search';

function Navigation() {
  return (
    <Wrapper className='flex'>
      <div className='nav-search flex'>
        <input type="text" placeholder='search ...' className='bg-neutral-100'/>
        <SearchIcon className="search-icon" />
      </div>
      <ul className='nav-items flex fs-nav' role="list">
        <li><PublicIcon /></li>
        <li><Brightness6Icon /></li>
        <li><AspectRatioIcon /><span className='counter fs-400'>1</span></li>
        <li><NotificationsActiveIcon /><span className='counter fs-400'>2</span></li>
        <li><AppsIcon /></li>
        <li><img src="https://images.pexels.com/photos/997472/pexels-photo-997472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='avatar' /></li>
      </ul>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  height: 50px;
  place-items: center;
  justify-content: space-between;
  padding-inline: 1.5rem;
  overflow: hidden;
  
    .nav-search {
      position: relative;

      .search-icon {
        position: absolute;
        right: 10px;
        top: 5px;
      }
      input {
        border-radius: 5px;
        outline: none;
        border: none;
        padding: 5px 10px;
  
          &::placeholder {
            padding-left: 5px;
          }
      }
    }

    ul {
      --gap: 1.5rem;
      li {
        position: relative;
        cursor: pointer;
        width: 30px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        &:last-child {
          
        }
        img {
          border-radius: 50%;
          width: 30px;
          height: 30px;
        } 
        .counter {
          background-color: red;
          color: white;
          width: 17px;
          height: 17px;
          border-radius: 50%;
          position: absolute;
          top: -3px;
          right: -2px;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 1px;
        }
      }
    }
`
export default Navigation