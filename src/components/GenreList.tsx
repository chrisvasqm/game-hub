import { HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url-cropper';

function GenreList() {
  const { data, error, isLoading } = useGenres();

  if (error) return null;

  return (
    <>
      {isLoading && <Spinner />}
      <List>
        {data.map(genre => (
          <ListItem key={genre.id} paddingY='5px'>
            <HStack>
              <Image
                boxSize='32px'
                borderRadius={10}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Text fontSize='lg'>{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default GenreList;
