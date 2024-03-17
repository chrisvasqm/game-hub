import usePlatforms from "./usePlatforms";

const usePlatform = (id?: number) => {
    const { data: platforms } = usePlatforms();
    return platforms?.results[0].results.find(p => p.id === id);
}

export default usePlatform;