import React from 'react';
import styled from 'styled-components';

function Button({ bgColor, color, size, borderRad, content }) {
  return (
    <Wrapper style={{backgroundColor: bgColor, color: color, size: size, borderRadius: borderRad, width: size}}>
      {content}
    </Wrapper>
  )
}

const Wrapper = styled.button`

`
export default Button