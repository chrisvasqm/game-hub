import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react';

function ColorModeSwitch() {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        colorScheme={'green'}
        isChecked={colorMode == 'dark'}
        onChange={toggleColorMode}
      />
      <Text>Dark mode</Text>
    </HStack>
  );
}

export default ColorModeSwitch;
