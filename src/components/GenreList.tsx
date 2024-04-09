import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text
} from '@chakra-ui/react';
import useGameQueryStore from '../hooks/game/useGameQueryStore';
import useGenres from '../hooks/genre/useGenres';
import getCroppedImageUrl from '../services/image-url-cropper';

function GenreList() {
  const { data, error, isLoading } = useGenres();
  const selectedGenreId = useGameQueryStore(state => state.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore(state => state.setGenreId);

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize='2xl' marginBottom={2}>
        Genres
      </Heading>
      <List>
        {data?.results.map(genre => (
          <ListItem key={genre.id} paddingY='5px'>
            <Button
              whiteSpace='normal'
              textAlign='left'
              variant='link'
              onClick={() => setSelectedGenreId(genre.id)}
            >
              <HStack>
                <Image
                  objectFit='cover'
                  boxSize='32px'
                  borderRadius={10}
                  src={getCroppedImageUrl(genre.image_background)}
                />
                <Text
                  fontWeight={genre?.id === selectedGenreId ? 'bold' : 'normal'}
                  fontSize='lg'
                >
                  {genre.name}
                </Text>
              </HStack>
            </Button>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default GenreList;
