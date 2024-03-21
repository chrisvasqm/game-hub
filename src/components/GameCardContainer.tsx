import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function GameCardContainer({ children }: Props) {
  return (
    <Box
      borderRadius={10}
      overflow='hidden'
      boxShadow='xl'
      _hover={{ transform: 'scale(1.05)', transition: 'transform .15s ease-in' }}>
      {children}
    </Box>
  );
}

export default GameCardContainer;
