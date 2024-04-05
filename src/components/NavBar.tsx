import { HStack, Image, Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

function NavBar() {
  return (
    <HStack padding='10px'>
      <Link to={'/'}>
        <Image src={"/public/gamehub.svg"} boxSize='60px' />
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
