import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react';
import { BsFillMoonFill } from 'react-icons/bs';

function ColorModeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack paddingRight={4}>
      <Switch
        colorScheme={'green'}
        isChecked={colorMode == 'dark'}
        onChange={toggleColorMode}
      />
      <BsFillMoonFill />
    </HStack>
  );
}

export default ColorModeSwitch;
