import React from 'react';
import styled from 'styled-components';

import { Button } from '../components';

import { earningData } from '../data';

import img from '../assets/welcome-bg.svg';

function Dashboard() {

  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  
  return (
    <Wrapper>
      <h1>Dashboard</h1>
      <p className='date'>{ date }</p>
      <div className='banner-box flex'>
        <div className='banner' style={{ backgroundImage: `url(${img})` }}>
          <div className='flex banner-content'>
            <div className='hi-msg'>
              <h4>Hi, <span className='user-name'>Sophia</span></h4>
              <p>Plan your days to be more productive</p>
              <p>you have 3 days tasks to complete today</p>
            </div>
            {/* <Button 
              bgColor="blue"
              color= "#fff"
              content='shop'
              borderRad="10px"
              size="100px"/> */}
          </div>
        </div> {/* banner */}
      </div>
      

      <div className='icons-box flex'>
        {
          earningData.map((item) => (
          <div className='icon-data flex' key={item.title}>
            <button 
              className='icon-btn'
              type='button'
              style={{ color: item.iconColor, backgroundColor: item.iconBg }}
              >
              {item.icon}
            </button>
            <div className='flex icon-info'>
              <p>
                <span>{item.amount}</span>
              </p>
              <p>
                <span>{item.percentage}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-top: 12px;
  h1 {
    font-size: 1.5rem
  }
  .banner-box {
    background-color: #C0DEFF;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    margin-top: 20px;
  }

  .date {
    color: #aba8a8;
  }
  .banner {
    height: 9rem;
    background-size: contain;
    width: 100%;
    background-repeat: no-repeat;
    border-radius: 10px;
    background-position-x: 90%;
    position: relative;
  

    @media (min-width: 1024px) { 
      width: 90%;
     }
  }

  .banner-content {
    width: 50%;
    margin: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    flex-direction: column;
    --gap: 2rem;
  }

  .hi-msg p {
    color : #aba8a8;
    letter-spacing: 0.5px;
  }
  .hi-msg h4 {
    margin-bottom: 10px;
  }
  .user-name {
    font-size: 36px;
  }

  .icons-box {
    border: 2px solid red;
    margin-top: 1rem;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    --gap: 4rem;
    padding: 1rem 1.2rem;
  }

  .icon-btn {
    border-radius: 50%;
    width: 60px;
    height: 60px;
    font-size: 2.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
  }
  .icon-data {
    flex-direction: column;
    align-items: center;
    gap: 1.8rem;
  }

  .icon-info {
    gap: 1.5rem;
    color: #888;
    font-weight: bold;
  }
`

export default Dashboard;