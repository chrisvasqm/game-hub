import {
  Button,
  Center,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spinner
} from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import useGameQueryStore from '../hooks/useGameQueryStore';
import usePlatform from '../hooks/usePlatform';
import usePlatforms from '../hooks/usePlatforms';

function PlatformSelector() {
  const { data, error, isLoading } = usePlatforms();

  const platformId = useGameQueryStore(state => state.gameQuery.platformId);
  const selectedPlatform = usePlatform(platformId);

  const setPlatformId = useGameQueryStore(state => state.setPlatformId);

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {`Platform: ${selectedPlatform?.name || ''}`}
      </MenuButton>
      <MenuList>
        {isLoading && (
          <Center>
            <Spinner />
          </Center>
        )}
        {data?.results[0].results.map(platform => (
          <MenuItem key={platform.id} onClick={() => setPlatformId(platform.id)}>
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default PlatformSelector;
