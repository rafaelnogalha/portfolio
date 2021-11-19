import { Flex, Text, HStack, useBreakpointValue} from '@chakra-ui/react'
import { Items } from './Items';
import { Logo } from './Logo';

export function Header(){

  return(
    <Flex 
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      <Items />
      <Logo />
      
    </Flex>
  );
}