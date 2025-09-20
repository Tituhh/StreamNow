import React from 'react';
import styled from 'styled-components';
import MovieCard from './MovieCard';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 32px;
  margin-top: 24px;
`;

const MovieGrid = ({ movies }) => (
  <Grid>
    {movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
  </Grid>
);

export default MovieGrid;
