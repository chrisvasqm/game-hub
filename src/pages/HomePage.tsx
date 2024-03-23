import { Grid, Show, GridItem, Flex, Box } from "@chakra-ui/react";
import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import GenreList from "../components/GenreList";
import PlatformSelector from "../components/PlatformSelector";
import SortOrderSelector from "../components/SortOrderSelector";

function HomePage() {
    return (
        <Grid
            templateAreas={{
                base: ` "main"`,
                lg: `"aside main"`
            }}
            templateColumns={{
                base: '1fr',
                lg: '200px 1fr'
            }}
        >
            <Show above='md'>
                <GridItem area='aside' paddingX={5}>
                    <GenreList />
                </GridItem>
            </Show>

            <GridItem area='main' padding='8px'>
                <GameHeading />

                <Box paddingLeft={2}>
                    <Flex marginBottom={5}>
                        <PlatformSelector />
                        <Box marginLeft={3}>
                            <SortOrderSelector />
                        </Box>
                    </Flex>
                </Box>
                <GameGrid />
            </GridItem>
        </Grid>
    )
}

export default HomePage;