import React from 'react';
import styled from 'styled-components';

function Chat() {
  return (
    <Wrapper>Chat</Wrapper>
  )
}

const Wrapper = styled.article`
  border: 2px solid red;
  position: absolute;
  width: 100px;
  height: 100px;
`

export default Chat