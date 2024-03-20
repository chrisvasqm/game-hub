import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { useRef } from 'react';
import { BsSearch } from 'react-icons/bs';
import useGameQueryStore from '../hooks/useGameQueryStore';

function SearchInput() {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore(state => state.setSearchText);

  return (
    <form
      className='q'
      onSubmit={event => {
        event.preventDefault();
        if (ref.current) setSearchText(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          placeholder='Search for games...'
          borderRadius={20}
          variant='filled'
        />
      </InputGroup>
    </form>
  );
}

export default SearchInput;
