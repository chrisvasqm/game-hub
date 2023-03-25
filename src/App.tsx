import { Box, Flex, Grid, GridItem, HStack, Show } from '@chakra-ui/react';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import NavBar from './components/NavBar';
import { useState } from 'react';
import { Genre } from './hooks/useGenres';
import PlatformSelector from './components/PlatformSelector';
import { Platform } from './hooks/useGames';
import SortOrderSelector from './components/SortOrderSelector';

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr'
      }}
    >
      <GridItem area='nav'>
        <NavBar onSearch={searchText => setGameQuery({ ...gameQuery, searchText })} />
      </GridItem>
      <Show above='lg'>
        <GridItem area='aside' paddingX={5}>
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={genre => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
      </Show>
      <GridItem area='main' padding='8px'>
        <Flex paddingX={2} marginBottom={4}>
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            onSelectPlatform={platform => setGameQuery({ ...gameQuery, platform })}
          />
          <Box marginLeft={3}>
            <SortOrderSelector
              selectedSortOrder={gameQuery.sortOrder}
              onSelectSortOrder={sortOrder => setGameQuery({ ...gameQuery, sortOrder })}
            />
          </Box>
        </Flex>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
