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
import usePlatforms from '../hooks/usePlatforms';
import { Platform } from '../hooks/useGames';

interface Props {
  selectedPlatform: Platform | null;
  onSelectPlatform: (platform: Platform) => void;
}

function PlatformSelector({ onSelectPlatform, selectedPlatform }: Props) {
  const { data, error, isLoading } = usePlatforms();

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform ? `Platform: ${selectedPlatform.name}` : 'Platforms'}
      </MenuButton>
      <MenuList>
        {isLoading && (
          <Center>
            <Spinner />
          </Center>
        )}
        {data.map(platform => (
          <MenuItem key={platform.id} onClick={() => onSelectPlatform(platform)}>
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default PlatformSelector;
