import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { useStateContext } from '../contexts/ContextProvider';

import { AiOutlineCloseSquare } from "react-icons/ai";
import { BsShop } from "react-icons/bs";
import { BiBowlingBall } from "react-icons/bi";


import { links } from '../data';




function Sidebar() {
    const { activeMenu, setActiveMenu } = useStateContext();
    console.log(setActiveMenu)
  return (
    <Wrapper>
        {
            activeMenu && (
             <div className='active-menu flex'>
                <Link to='/' onClick={() => {}} className='flex logo' >
                    <BiBowlingBall /> <span>Nulia</span>
                </Link>
                <button type='button' onClick={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)} className=''>
                    <AiOutlineCloseSquare />
                </button>
             </div>   
            )
        }
        <div className='menu'>
            {
                links.map(item => (
                   <div className="list flow" key={item.title}>
                    <p className='list-title'>{item.title}</p>
                    {
                        item.links.map((item) => (
                            <NavLink 
                                className={({isActive}) => 
                                    isActive ? 'activeLink' : 'normalLink'
                                }
                                key={item.link}
                                to={`/${item.link}`}
                                onClick={() => {}}    
                                >
                                    <span>{item.icon}</span>
                                    <h3>{item.link}</h3>
                                {item.new && <span className='new-feature'>new</span>}
                                
                            </NavLink>
                        ))}
                   </div>
                    ))}
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.aside`
    transition: 0.1s;
    margin-left: 0.75rem;
    height: 100vh;
    overflow: auto;
    padding-bottom: 2.5rem;
    margin-top: 1rem;
    ::-webkit-scrollbar {
    width: 20px;
    }
  


   /* @media (min-width: 45rem) {
    overflow: hidden;
    } */
    .active-menu {
        justify-content: space-between;
        padding-inline: .75rem;
    }
    
    .logo {
        align-items: center;
        font-weight: bold;
        font-size: 1.75rem;
        line-height: 1.75;
        --gap: .5rem;
    }
    button {
        font-size: 1.25rem;

        /* @media (min-width: 45rem) {
            display: none;
        } */
    }

    .menu {
        margin-top: 2.5rem;
        margin-left: 0.75rem;
        
        .list {
            margin-bottom: 1.75rem;
        }
        

        .list-title {
            text-transform: uppercase;
            color: #888;
            margin-bottom: 0.75rem;
            font-size: .8rem;
            font-weight: bold;
            letter-spacing: 0.05rem;

        }
        span {
            margin-right: 10px;
        }

        .new-feature {
            margin-left: 50px;
            background-color: red;
            padding: 0px 10px;
            border-radius: 38px;
            color: #fff;
            font-size: 14px;
        }
        .link {
            align-items: center;
            cursor: pointer;
        }

        h3 {
            font-size: 0.75rem;
        }

    }
`

export default Sidebar