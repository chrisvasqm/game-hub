import { Image, SimpleGrid, Spinner } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";

interface Props {
    id: number;
}

function GameScreenshots({ id }: Props) {
    const { data: screenshots, error, isLoading } = useScreenshots(id);

    if (isLoading) return <Spinner />

    if (error) throw error;

    return (
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
            {screenshots?.results.map(screenshot => <Image src={screenshot.image} />)}
        </SimpleGrid>
    )
}

export default GameScreenshots;