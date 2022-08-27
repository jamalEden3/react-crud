import React from 'react';
import styled from'styled-components'

import { Link } from 'react-router-dom'
import Navigation from '../../components/Navigation';
import Sidebar from '../../components/Sidebar';
import Widget from '../../components/Widget';

function FrontPage() {
  return (
    <Wrapper className='flex'>
      <Sidebar />
      <main>
        <Navigation />
        <section className='widgets'>
          <Widget />
          <Widget />
          <Widget />
          <Widget />
        </section>
        <h1>This is HOOMMEE</h1>
      </main>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  --gap: 0;
  main {
    flex: 6;
  }
  
`

export default FrontPage