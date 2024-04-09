import { HStack, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

function NavBar() {
  return (
    <HStack padding='10px'>
      <Link to={'/'}>
        <Image src={"/gamehub.svg"} boxSize='60px' />
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
