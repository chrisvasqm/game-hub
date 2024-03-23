import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import { Screenshot } from "../entities/Screenshot";
import APIClient from "../services/api-client";

const useScreenshots = (id: number | string) => {
    const client = new APIClient<Screenshot>(`/games/${id}/screenshots`);

    return useQuery({
        queryKey: ['screenshots', id],
        queryFn: client.getAll,
        staleTime: ms('24h')
    });
}

export default useScreenshots;