import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  max-width: 700px;
  margin: 48px auto;
  background: #20232a;
  border-radius: 20px;
  box-shadow: 0 4px 18px #0005;
  padding: 36px 32px;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 2rem;
  margin-bottom: 18px;
`;

const Text = styled.p`
  color: #bbb;
  font-size: 1.08rem;
`;

const Disclaimer = () => (
  <Box>
    <Title>Disclaimer</Title>
    <Text>
      This website streams movies using third-party APIs. We do not host any content ourselves.<br />
      All rights belong to their respective owners.
    </Text>
  </Box>
);
export default Disclaimer;
