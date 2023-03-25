import {
  Button,
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
  onSelectGenre: (genre: Genre) => void;
}

function GenreList({ onSelectGenre }: Props) {
  const { data, error, isLoading } = useGenres();

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <>
      <List>
        {data.map(genre => (
          <ListItem key={genre.id} paddingY='5px'>
            <Button variant='link' onClick={() => onSelectGenre(genre)}>
              <HStack>
                <Image
                  boxSize='32px'
                  borderRadius={10}
                  src={getCroppedImageUrl(genre.image_background)}
                />
                <Text fontSize='lg'>{genre.name}</Text>
              </HStack>
            </Button>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default GenreList;
