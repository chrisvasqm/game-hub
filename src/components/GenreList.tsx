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
import useGenres from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url-cropper';
import { Genre } from '../hooks/useGenres';

interface Props {
  selectedGenre: Genre | null;
  onSelectGenre: (genre: Genre) => void;
}

function GenreList({ selectedGenre, onSelectGenre }: Props) {
  const { data, error, isLoading } = useGenres();

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize='2xl' marginBottom={2}>
        Genres
      </Heading>
      <List>
        {data.results.map(genre => (
          <ListItem key={genre.id} paddingY='5px'>
            <Button
              whiteSpace='normal'
              textAlign='left'
              variant='link'
              onClick={() => onSelectGenre(genre)}
            >
              <HStack>
                <Image
                  objectFit='cover'
                  boxSize='32px'
                  borderRadius={10}
                  src={getCroppedImageUrl(genre.image_background)}
                />
                <Text
                  fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}
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
