import Platform from "../entities/Platform";
import { Icon, HStack } from '@chakra-ui/react';
import { SiNintendo } from 'react-icons/si';
import { MdPhoneIphone } from 'react-icons/md';
import { BsGlobe } from 'react-icons/bs';
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid
} from 'react-icons/fa';
import { IconType } from 'react-icons';

interface Props {
  platforms: Platform[] | null;
}

function PlatformIconList({ platforms }: Props) {
  const iconsMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe
  };

  return (
    <HStack marginY={1}>
      {platforms &&
        platforms.map(platform => (
          <Icon key={platform.id} as={iconsMap[platform.slug]} color={'gray.500'} />
        ))}
    </HStack>
  );
}

export default PlatformIconList;
