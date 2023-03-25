import { Spinner } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
function GenreList() {
  const { data, error, isLoading } = useGenres();

  if (error) return null;

  return (
    <>
      {isLoading && <Spinner />}
      <ul>
        {data.map(genre => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </>
  );
}

export default GenreList;
