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
import usePlatform from '../hooks/usePlatform';
import usePlatforms, { Platform } from '../hooks/usePlatforms';

interface Props {
  selectedPlatformId?: number;
  onSelectPlatform: (platform: Platform) => void;
}

function PlatformSelector({ selectedPlatformId, onSelectPlatform }: Props) {
  const { data, error, isLoading } = usePlatforms();
  const selectedPlatform = usePlatform(selectedPlatformId);

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {`Platform: ${selectedPlatform?.name}` || 'Platforms'}
      </MenuButton>
      <MenuList>
        {isLoading && (
          <Center>
            <Spinner />
          </Center>
        )}
        {data?.results[0].results.map(platform => (
          <MenuItem key={platform.id} onClick={() => onSelectPlatform(platform)}>
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default PlatformSelector;
