import { Badge } from '@chakra-ui/react';

interface Props {
  score: number;
}

function CreditScore({ score }: Props) {
  let color = 'red';
  if (score > 90) color = 'green';
  else if (score > 80) color = 'orange';
  else if (score > 70) color = 'yellow';

  return (
    <Badge colorScheme={color} paddingX={2} fontSize='14px' borderRadius='4px'>
      {score}
    </Badge>
  );
}

export default CreditScore;
