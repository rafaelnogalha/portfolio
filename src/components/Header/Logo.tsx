import { Text } from '@chakra-ui/react'

export function Logo(){
  return(
    
    <Text
      pos="fixed"
      fontSize={["2xl","3xl"]}
      fontWeight="bold"
      letterSpacing="tight"
      w="64"
    >
      Rnoga
      <Text 
        as="span" 
        ml="1"
        color="pink.500"
      >
        .
      </Text>
    </Text>
    
  )
}