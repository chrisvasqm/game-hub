import { Heading, SimpleGrid, Spinner, Box, GridItem } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/game/ExpandableText";
import GameAttributes from "../components/game/GameAttributes";
import GameScreenshots from "../components/game/GameScreenshots";
import GameTrailer from "../components/game/GameTrailer";
import useGame from "../hooks/game/useGame";

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