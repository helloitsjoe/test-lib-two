import React from 'react';
import styled from 'styled-components';
import { HomebaseButton } from 'test-one';

const Div = styled.div`
  color: tomato;
`;

// export const NavButton = () => <Button>NAV</Button>;
export const NavButton = () => (
  <HomebaseButton>
    <Div>NAV</Div>
  </HomebaseButton>
);
