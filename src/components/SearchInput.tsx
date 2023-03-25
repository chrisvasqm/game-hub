import { Input, InputGroup, InputLeftAddon, InputLeftElement } from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';

function SearchInput() {
  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />} />
      <Input placeholder='Search for games...' borderRadius={20} variant='filled' />
    </InputGroup>
  );
}

export default SearchInput;
