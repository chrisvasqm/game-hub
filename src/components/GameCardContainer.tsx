import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function GameCardContainer({ children }: Props) {
  return (
    <Box width='300px' borderRadius={10} overflow='hidden' boxShadow='xl'>
      {children}
    </Box>
  );
}

export default GameCardContainer;
