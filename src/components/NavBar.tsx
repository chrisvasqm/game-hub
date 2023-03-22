import { HStack, Image, Switch, Text } from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';

function NavBar() {
  return (
    <HStack justifyContent='space-between' padding='10px'>
      <Image src={logo} boxSize='60px' />
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
