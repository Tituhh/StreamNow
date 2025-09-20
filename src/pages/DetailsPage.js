import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams, Link } from 'react-router-dom';
import { fetchMovieDetails } from '../api/tmdb';

const Container = styled.div`
  max-width: 900px;
  margin: 36px auto;
  background: #191c22;
  border-radius: 22px;
  padding: 32px;
  box-shadow: 0 8px 32px #0005;
`;

const TopRow = styled.div`
  display: flex;
  gap: 32px;
  align-items: flex-start;
  margin-bottom: 24px;
`;

const Poster = styled.img`
  border-radius: 16px;
  box-shadow: 0 4px 20px #0006;
  width: 210px;
`;

const MainInfo = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 2.2rem;
  margin-bottom: 10px;
`;

const SubInfo = styled.p`
  color: #bbb;
  font-size: 1.1rem;
`;

const Overview = styled.p`
  margin: 18px 0;
  color: #e0e0e0;
  font-size: 1.06rem;
`;

const Section = styled.section`
  margin-top: 28px;
`;

const SectionTitle = styled.h3`
  color: #fff;
  margin-bottom: 10px;
  font-size: 1.2rem;
`;

const CastList = styled.ul`
  display: flex;
  gap: 18px;
  padding: 0;
  margin: 0;
  list-style: none;
`;

const CastItem = styled.li`
  color: #fff;
  background: #23262e;
  padding: 8px 12px;
  border-radius: 8px;
  font-size: 0.95rem;
`;

const ReviewList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ReviewItem = styled.li`
  background: #23262e;
  margin-bottom: 12px;
  padding: 12px;
  border-radius: 8px;
  color: #e0e0e0;
`;

const SimilarMovies = styled.div`
  display: flex;
  gap: 18px;
  margin-top: 12px;
`;

const SimilarPoster = styled.img`
  border-radius: 8px;
  width: 90px;
  box-shadow: 0 2px 8px #0003;
  transition: transform 0.18s;
  &:hover {
    transform: scale(1.08);
  }
`;

const WatchBtn = styled(Link)`
  display: inline-block;
  background: linear-gradient(90deg, #ff6e40 0, #ff3d00 100%);
  color: #fff;
  font-weight: 700;
  font-size: 1.25rem;
  padding: 14px 32px;
  border-radius: 10px;
  margin-top: 28px;
  text-decoration: none;
  box-shadow: 0 4px 16px #ff3d0030;
  transition: background 0.18s;
  &:hover {
    background: linear-gradient(90deg, #ff3d00 0, #ff6e40 100%);
  }
`;

const TrailerFrame = styled.iframe`
  width: 100%;
  max-width: 480px;
  height: 260px;
  border-radius: 12px;
  margin-bottom: 18px;
  box-shadow: 0 4px 16px #0005;
`;

const DetailsPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieDetails(id).then(setMovie);
  }, [id]);

  if (!movie) return <Container>Loading...</Container>;

  return (
    <Container>
      <TopRow>
        <Poster src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        <MainInfo>
          <Title>{movie.title}</Title>
          <SubInfo>Release Date: {movie.release_date}</SubInfo>
          <Overview>{movie.overview}</Overview>
          <Section>
            <SectionTitle>Trailer</SectionTitle>
            {movie.videos.results.length > 0 && (
              <TrailerFrame
                src={`https://www.youtube.com/embed/${movie.videos.results[0].key}`}
                title="Trailer"
                frameBorder="0"
                allowFullScreen
              />
            )}
          </Section>
        </MainInfo>
      </TopRow>
      <Section>
        <SectionTitle>Cast</SectionTitle>
        <CastList>
          {movie.credits.cast.slice(0,6).map(actor =>
            <CastItem key={actor.id}>{actor.name} <span style={{color:'#ffa726'}}>({actor.character})</span></CastItem>
          )}
        </CastList>
      </Section>
      <Section>
        <SectionTitle>Reviews</SectionTitle>
        <ReviewList>
          {movie.reviews.results.length
            ? movie.reviews.results.map(r => <ReviewItem key={r.id}><b>{r.author}</b>: {r.content.slice(0,160)}...</ReviewItem>)
            : <SubInfo>No reviews</SubInfo>}
        </ReviewList>
      </Section>
      <Section>
        <SectionTitle>Similar Movies</SectionTitle>
        <SimilarMovies>
          {movie.similar.results.slice(0,4).map(m =>
            <Link key={m.id} to={`/details/${m.id}`}> 
              <SimilarPoster src={`https://image.tmdb.org/t/p/w200${m.poster_path}`} alt={m.title} />
            </Link>
          )}
        </SimilarMovies>
      </Section>
      <WatchBtn to={`/stream/${movie.id}`}>Watch Now</WatchBtn>
    </Container>
  );
};

export default DetailsPage;
