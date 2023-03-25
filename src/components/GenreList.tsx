import { Spinner } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
function GenreList() {
  const { genres, error, isLoading } = useGenres();

  if (error) return null;

  return (
    <>
      {isLoading && <Spinner />}
      <ul>
        {genres.map(genre => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </>
  );
}

export default GenreList;
