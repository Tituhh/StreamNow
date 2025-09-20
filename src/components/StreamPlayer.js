import React, { useState } from 'react';
import styled from 'styled-components';

const PlayerBox = styled.div`
  border-radius: 36px;
  box-shadow: 0 8px 32px #0007;
  background: #181a1f;
  max-width: 900px;
  margin: 36px auto;
  padding: 36px 28px 28px 28px;
  text-align: center;
`;

const PlayerFrame = styled.iframe`
  border-radius: 36px;
  width: 100%;
  height: 520px;
  max-width: 800px;
  border: none;
  box-shadow: 0 2px 16px #0005;
`;

const SandboxBtn = styled.button`
  background: ${({ active }) => active ? '#00e676' : '#ff3d00'};
  color: #fff;
  font-weight: 700;
  font-size: 1.1rem;
  border: none;
  border-radius: 10px;
  padding: 13px 32px;
  margin-top: 24px;
  cursor: pointer;
  transition: background 0.16s;
  box-shadow: 0 2px 12px #0003;
  &:hover {
    background: ${({ active }) => active ? '#00c853' : '#d50000'};
  }
`;

const StreamPlayer = ({ tmdbId }) => {
  const [sandbox, setSandbox] = useState(true);

  return (
    <PlayerBox>
      <PlayerFrame
        src={`https://embed.su/embed/movie/${tmdbId}`}
        title="Stream"
        sandbox={sandbox ? 'allow-scripts allow-same-origin' : undefined}
        allowFullScreen
      />
      <SandboxBtn active={sandbox} onClick={() => setSandbox(!sandbox)}>
        {sandbox ? 'Remove Ads (Enable Sandbox)' : 'Disable Sandbox'}
      </SandboxBtn>
    </PlayerBox>
  );
};

export default StreamPlayer;
