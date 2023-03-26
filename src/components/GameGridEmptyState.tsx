import { VStack, Text, Heading, Image } from '@chakra-ui/react';
import gameOver from '../assets/game-over.png';

function GameGridEmptyState() {
  return (
    <VStack>
      <Image src={gameOver} boxSize='300px' />
      <Heading as='h1'>Game Over</Heading>
      <Text colorScheme={'gray'}>No games were found. Try again later.</Text>
      <a
        style={{ fontSize: '10px', colorScheme: 'gray' }}
        href='https://www.flaticon.com/free-icons/game-over'
        title='game over icons'
      >
        Game over icons created by Freepik - Flaticon
      </a>
    </VStack>
  );
}

export default GameGridEmptyState;
