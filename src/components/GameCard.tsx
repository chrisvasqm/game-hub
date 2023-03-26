import { Card, CardBody, Heading, HStack, Image } from '@chakra-ui/react';
import { Game } from '../hooks/useGames';
import CreditScore from './CreditScore';
import PlatformIconList from './PlatformIconList';
import getCroppedImageUrl from '../services/image-url-cropper';
import Emoji from './Emoji';

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <Card boxShadow={0}>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent='space-between' marginBottom={3}>
          <PlatformIconList platforms={game.parent_platforms && game.parent_platforms.map(p => p.platform)} />
          <CreditScore score={game.metacritic} />
        </HStack>
        <Heading fontSize='2xl'>{game.name}</Heading>
        <Emoji rating={game.rating_top} />
      </CardBody>
    </Card>
  );
}

export default GameCard;
