import useTrailer from "../../hooks/useTrailer";
import { Spinner } from "@chakra-ui/react";

interface Props {
    id: number;
}

function GameTrailer({ id }: Props) {
    const { data: trailers, error, isLoading } = useTrailer(id);

    if (isLoading) return <Spinner />;

    if (error) throw error;

    const first = trailers?.results[0];
    if (!first) return null;

    return <video
        controls
        width={1080}
        poster={first.preview}
        src={first.data[480]} />
}

export default GameTrailer;