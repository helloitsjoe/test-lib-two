console.log('test-two one');
import React from 'react';
console.log('test-two two');
import styled from 'styled-components';
console.log(`test-two styled:`, styled);
import { HomebaseButton } from 'test-one';
console.log(`test-two HomebaseButton:`, HomebaseButton);

const Div = styled.div`
  color: tomato;
`;

// export const NavButton = () => <Button>NAV</Button>;
export const NavButton = () => (
  <HomebaseButton>
    <Div>NAV</Div>
  </HomebaseButton>
);
