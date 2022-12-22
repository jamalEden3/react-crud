import React from 'react';
import styled from 'styled-components';

function Button({ bgColor, color, size, borderRad, content }) {
  return (
    <Wrapper style={{backgroundColor: bgColor, color: color, borderRadius: borderRad, width: size}}>
      {content}
    </Wrapper>
  )
}

const Wrapper = styled.button`
  padding: 20px 10px;
  font-size: 1.2rem;
`
export default Button