import React from 'react';
import styled from 'styled-components';

import { Button } from '../components';

import { earningData } from '../data';

import img from '../assets/welcome-bg.svg';

function Ecommerce() {
  return (
    <Wrapper>
      <div className='banner-box flex'>
        <div className='banner' style={{ backgroundImage: `url(${img})` }}>
          <div className='flex banner-content'>
            <div>
              <h2>Earnings</h2>
              <p>$63,000</p>
            </div>
            <Button 
              bgColor="blue"
              color= "#fff"
              content='shop'
              borderRad="10px"
              size="100px"/>
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
            <div className='flex'>
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
  .banner-box {
    border: 2px solid #000;
    background-color: #C0DEFF;
    justify-content: center;
    align-items: center;
  }

  .banner {
    height: 11rem;
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
    width: 50px;
    height: 50px;
    font-size: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
  }
  .icon-data {
    flex-direction: column;
    border: 2px solid red;
    align-items: center;
    gap: 1.8rem;
  }
`

export default Ecommerce;