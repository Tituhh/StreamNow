import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Card = styled.div`
  background: #1a1a1a;
  border-radius: 18px;
  box-shadow: 0 6px 18px #0005;
  overflow: hidden;
  transition: transform 0.16s, box-shadow 0.16s;
  &:hover {
    transform: translateY(-4px) scale(1.03);
    box-shadow: 0 12px 36px #0007;
  }
`;

const Poster = styled.img`
  width: 100%;
  display: block;
`;

const Info = styled.div`
  padding: 16px;
`;

const Title = styled.h3`
  font-size: 1.1rem;
  color: #fff;
  margin: 0 0 4px 0;
  font-weight: 600;
`;

const Date = styled.p`
  color: #bbb;
  margin: 0;
  font-size: 0.92rem;
`;

const MovieCard = ({ movie }) => (
  <Link to={`/details/${movie.id}`}> 
    <Card>
      <Poster src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title || movie.name} />
      <Info>
        <Title>{movie.title || movie.name}</Title>
        <Date>{movie.release_date || movie.first_air_date}</Date>
      </Info>
    </Card>
  </Link>
);

export default MovieCard;
