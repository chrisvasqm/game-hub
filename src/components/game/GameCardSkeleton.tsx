import { Card, Skeleton, SkeletonText, CardBody } from '@chakra-ui/react';

function GameCardSkeleton() {
  return (
    <Card>
      <Skeleton height='200px' />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
}

export default GameCardSkeleton;
