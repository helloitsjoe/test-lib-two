import React from 'react';
import styled from 'styled-components';
console.log(`styled:`, styled);
import { HomebaseButton } from 'test-one';
console.log(`HomebaseButton:`, HomebaseButton);

const Div = styled.div`
  color: tomato;
`;

// export const NavButton = () => <Button>NAV</Button>;
export const NavButton = () => (
  <HomebaseButton>
    <Div>NAV</Div>
  </HomebaseButton>
);
