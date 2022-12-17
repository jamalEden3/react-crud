import React from 'react';
import styled from 'styled-components';

import img from '../assets/welcome-bg.svg';

function Ecommerce() {
  return (
    <Wrapper>
      <div className='flex cc'>
        <div className='banner' style={{ backgroundImage: `url(${img})` }}>
          
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  border: 2px solid yellow;
  margin-top: 12px;

  .cc {
    border: 2px solid green;
    justify-content: center;
    align-items: center;
  }

  .banner {
    border: 2px solid blue;
    height: 11rem;
    background-size: cover;
    width: 100%;
    background-repeat: no-repeat;
    border-radius: 10px;
    background-position-x: 30px;
  }

`

export default Ecommerce;