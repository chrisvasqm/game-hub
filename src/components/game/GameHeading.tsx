import { Heading } from '@chakra-ui/react';
import useGameQueryStore from '../../hooks/game/useGameQueryStore';
import useGenre from '../../hooks/genre/useGenre';
import usePlatform from '../../hooks/platform/usePlatform';

function GameHeading() {
  const genreId = useGameQueryStore(state => state.gameQuery.genreId);
  const genre = useGenre(genreId);

  const platformId = useGameQueryStore(state => state.gameQuery.platformId);
  const platform = usePlatform(platformId)

  const heading = `
    ${platform?.name || ''} 
    ${genre?.name || ''} 
    Games
  `;

  return (
    <Heading as='h1' marginY={5} fontSize='5xl'>
      {heading}
    </Heading>
  );
}

export default GameHeading;
