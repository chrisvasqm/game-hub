import { Box, Flex, Grid, GridItem, Show } from '@chakra-ui/react';
import { useState } from 'react';
import GameGrid from './components/GameGrid';
import GameHeading from './components/GameHeading';
import GenreList from './components/GenreList';
import NavBar from './components/NavBar';
import PlatformSelector from './components/PlatformSelector';
import SortOrderSelector from './components/SortOrderSelector';

export interface GameQuery {
  genreId?: number;
  platformId?: number;
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
            selectedGenreId={gameQuery.genreId}
            onSelectGenre={genreId => setGameQuery({ ...gameQuery, genreId })}
          />
        </GridItem>
      </Show>
      <GridItem area='main' padding='8px'>
        <GameHeading gameQuery={gameQuery} />
        <Box paddingLeft={2}>
          <Flex marginBottom={5}>
            <PlatformSelector
              selectedPlatformId={gameQuery.platformId || 1}
              onSelectPlatform={platform => setGameQuery({ ...gameQuery, platformId: platform.id })}
            />
            <Box marginLeft={3}>
              <SortOrderSelector
                selectedSortOrder={gameQuery.sortOrder}
                onSelectSortOrder={sortOrder => setGameQuery({ ...gameQuery, sortOrder })}
              />
            </Box>
          </Flex>
        </Box>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
