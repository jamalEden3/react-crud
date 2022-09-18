import React from 'react'
import styled from'styled-components';

import Sidebar from '../../components/Sidebar';
import Navigation from '../../components/Navigation';
import DataTabel from '../../components/DataTabel';

const List = () => {
  return (
    <Wrapper className='flex'>
      <Sidebar />
      <main>
        <Navigation />
        <DataTabel />
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

export default List