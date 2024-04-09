import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import useGameQueryStore from '../hooks/game/useGameQueryStore';

interface SortOrder {
  value: string;
  label: string;
}

function SortOrderSelector() {
  const sortOrders: SortOrder[] = [
    { value: '', label: 'Relevance' },
    { value: '-added', label: 'Date added' },
    { value: 'name', label: 'Name' },
    { value: '-released', label: 'Release date' },
    { value: '-metacritic', label: 'Popularity' },
    { value: '-rating', label: 'Average rating' }
  ];

  const selectedSortOrder = useGameQueryStore(state => state.gameQuery.sortOrder);
  const currentSortOrder = sortOrders.find(
    sortOrder => sortOrder.value === selectedSortOrder
  );

  const setSortOrder = useGameQueryStore(state => state.setSortOrder);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {currentSortOrder?.label || 'Relevance'}
      </MenuButton>
      <MenuList>
        {sortOrders.map(sortOrder => (
          <MenuItem
            key={sortOrder.value}
            onClick={() => setSortOrder(sortOrder.value)}
          >
            {sortOrder.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default SortOrderSelector;
