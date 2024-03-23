import { Box, Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import useGame from "../hooks/useGame";

function GameDetailsPage() {
  const params = useParams();
  const { data: game, error, isLoading } = useGame(params.slug!);

  if (isLoading) return <Spinner />

  if (error) throw error;

  return (
    <>
      <Heading>{game?.name}</Heading>
      <ExpandableText>{game?.description_raw}</ExpandableText>
    </>
  )
}

export default GameDetailsPage;