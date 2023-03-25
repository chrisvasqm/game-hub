import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react';
import { BsFillMoonFill } from 'react-icons/bs';

function ColorModeSwitch() {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        colorScheme={'green'}
        isChecked={colorMode == 'dark'}
        onChange={toggleColorMode}
      />
      <BsFillMoonFill />
      <Text whiteSpace='nowrap'>Dark mode</Text>
    </HStack>
  );
}

export default ColorModeSwitch;
