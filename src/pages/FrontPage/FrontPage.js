import React from 'react';
import styled from'styled-components'

import { Link } from 'react-router-dom'
import Navigation from '../../components/Navigation';
import Sidebar from '../../components/Sidebar';

function FrontPage() {
  return (
    <Wrapper className='flex'>
      <Sidebar />
      <div className="container">Container</div>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  .container {
    flex: 6;
  }
  aside {
    flex: 1;
    min-height: 100vh;
    border-right: 1px solid #000;
  }
`

export default FrontPage