import {
  AspectRatio,
  Card,
  CardBody,
  Heading,
  HStack,
  Image,
  Text
} from '@chakra-ui/react';
import { Game } from '../hooks/useGames';
import CreditScore from './CreditScore';
import PlatformIconList from './PlatformIconList';
import getCroppedImageUrl from '../services/image-url-cropper';

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <Card width='300px' boxShadow={'2xl'} borderRadius={10} overflow='hidden'>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <Heading fontSize='2xl'>{game.name}</Heading>
        <HStack justifyContent='space-between' paddingY={1}>
          <PlatformIconList
            platforms={game.parent_platforms.map(p => p.platform)}
          />
          <CreditScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
}

export default GameCard;
