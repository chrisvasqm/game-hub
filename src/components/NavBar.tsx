import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

interface Props {
  onSearch: (searchText: string) => void;
}

function NavBar({ onSearch }: Props) {
  return (
    <HStack padding='10px'>
      <Image src={logo} boxSize='60px' />
      <SearchInput onSearch={searchText => onSearch(searchText)} />
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
