import { HStack, IconButton, Image } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
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
      <a href='https://github.com/chrisvasqm/game-hub' target={'_blank'}>
        <IconButton
          variant={'ghost'}
          aria-label='GitHub Button'
          icon={<FaGithub size={22} />}
        />
      </a>
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
