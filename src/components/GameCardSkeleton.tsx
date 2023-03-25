import { Card, Skeleton, SkeletonText, CardBody } from '@chakra-ui/react';

function GameCardSkeleton() {
  return (
    <Card width='300px' borderRadius={10} boxShadow='2xl' overflow='hidden'>
      <Skeleton height='200px' />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
}

export default GameCardSkeleton;
