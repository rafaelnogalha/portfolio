import { Flex, Text } from '@chakra-ui/react'

export function Logo(){
  return(
    
    <Flex
  
    >

      <Text
        
        fontSize={["2xl","3xl"]}
        fontWeight="bold"
        letterSpacing="tight"
        
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

    </Flex>
    
  )
}