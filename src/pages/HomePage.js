import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { fetchMovies, fetchTVShows } from '../api/tmdb';
import MovieGrid from '../components/MovieGrid';

const Container = styled.div`
  max-width: 1200px;
  margin: 32px auto;
  padding: 0 24px;
`;

const SectionTitle = styled.h2`
  color: #fff;
  font-size: 2rem;
  margin-top: 32px;
  margin-bottom: 12px;
  font-weight: 700;
`;

const PageBtn = styled.button`
  background: #2962ff;
  color: #fff;
  border: none;
  border-radius: 9px;
  padding: 10px 28px;
  font-size: 1.15rem;
  font-weight: 600;
  margin: 36px auto 0 auto;
  display: block;
  cursor: pointer;
  box-shadow: 0 2px 8px #0002;
  transition: background 0.2s;
  &:hover {
    background: #0039cb;
  }
`;

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchMovies(page).then(data => setMovies(data.results));
    fetchTVShows(page).then(data => setSeries(data.results));
  }, [page]);

  return (
    <Container>
      <SectionTitle>Movies</SectionTitle>
      <MovieGrid movies={movies} />
      <SectionTitle>Series</SectionTitle>
      <MovieGrid movies={series} />
      <PageBtn onClick={() => setPage(page + 1)}>Next Page</PageBtn>
    </Container>
  );
};

export default HomePage;
