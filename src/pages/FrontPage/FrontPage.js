import React from 'react';
import styled from'styled-components'

import { Link } from 'react-router-dom'
import Navigation from '../../components/Navigation';
import Sidebar from '../../components/Sidebar';
import Widget from '../../components/Widget';
import Featured from '../../components/Featured';
import Chart from '../../components/Chart';
import Tabel from '../../components/Tabel';


function FrontPage() {
  return (
    <Wrapper className='flex'>
      <Sidebar />
      <main>
        <Navigation />
        <section className='widgets'>
          <Widget type='user' />
          <Widget type='earnings' />
          <Widget type='orders' />
          <Widget type='balance' />
        </section>
        <div className='charts flex'>
          <Featured />
          <Chart />
        </div>
        <div className='tabel'>
          <h2>Last transactions</h2>
          <Tabel />
        </div>
      </main>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  --gap: 0;
  main {
    flex: 6;
  }
  .widgets {
    display: flex;
    padding: 20px;
    gap: 20px;
    flex-wrap: wrap
  }
  .charts {
    padding-inline: 25px;
    --gap: 2rem;
  }

  .tabel {
    margin-top: 30px;
    padding: 20px;
  }
`

export default FrontPage