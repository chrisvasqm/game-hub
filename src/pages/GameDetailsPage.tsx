import { Heading, SimpleGrid, Spinner, Box, GridItem } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import GameScreenshots from "../components/GameScreenshots";
import GameTrailer from "../components/GameTrailer";
import useGame from "../hooks/useGame";

function GameDetailsPage() {
  const params = useParams();
  const { data: game, error, isLoading } = useGame(params.slug!);

  if (isLoading) return <Spinner />

  if (error) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      <GridItem>
        <Heading>{game?.name}</Heading>
        <ExpandableText>{game?.description_raw}</ExpandableText>
        <GameAttributes game={game} />
      </GridItem>
      <GridItem>
        <GameTrailer id={game.id} />
        <GameScreenshots id={game.id} />
      </GridItem>
    </SimpleGrid>
  )
}

export default GameDetailsPage;