import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import StreamPlayer from '../components/StreamPlayer';

const Title = styled.h2`
  color: #fff;
  text-align: center;
  font-size: 2rem;
  margin-top: 46px;
  font-weight: 700;
`;

const StreamingPage = () => {
  const { id } = useParams();

  return (
    <>
      <Title>Streaming</Title>
      <StreamPlayer tmdbId={id} />
    </>
  );
};

export default StreamingPage;
