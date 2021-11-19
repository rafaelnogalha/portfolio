import { Flex, Button, IconButton } from '@chakra-ui/react'
import { useState } from 'react'
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'

export function Items(){
  const [display, changeDisplay] = useState('none')
  return(
    
  <Flex
    align="center"
    ml="auto" 
  >
    <Flex
    >
      <Flex
        display={['none', 'none', 'flex', 'flex']}
      >
        <NextLink href="/" passHref>
          <Button 
            as="a"
            variant="ghost"
            _hover={{ 
              bg: "gray.50",
              color: "teal.900"
            }}
            aria-label="Home"
            my={5}
            w="100%"
          >
            Home
          </Button>
        </NextLink>
        <NextLink href="/about" passHref>
          <Button 
            as="a"
            variant="ghost"
            _hover={{ 
              bg: "gray.50",
              color: "teal.900"
            }}
            aria-label="About"
            my={5}
            w="100%"
          >
            About
          </Button>
        </NextLink>
        <NextLink href="/projects" passHref>
          <Button 
            as="a"
            variant="ghost"
            _hover={{ 
              bg: "gray.50",
              color: "teal.900"
            }}
            aria-label="Projects"
            my={5}
            w="100%"
          >
            Projects
          </Button>
        </NextLink>
        <NextLink href="/contact" passHref>
          <Button 
            as="a"
            variant="ghost"
            _hover={{ 
              bg: "gray.50",
              color: "teal.900"
            }}
            aria-label="Contact"
            my={5}
            w="100%"
          >
            Contact
          </Button>
        </NextLink>
        
      </Flex>
      <IconButton 
        aria-label="Open Menu"
        size="lg"
        mr={2}
        bgColor="gray.500"
        _hover={{ 
          bg: "gray.50",
          color: "teal.900"
        }}
        icon={<HamburgerIcon />}
        display={['flex', 'flex', 'none', 'none']}
        onClick={() => changeDisplay('flex')}
      />
    </Flex>
     
    <Flex
        w="100vw"
        bgColor="gray.800"
        zIndex={20}
        h="50vh"
        pos="fixed"
        top="0"
        left="0"
        overflowY="auto"
        flexDir="column"
        display = {display}
      >
      <Flex
        justify="flex-end"
      >
        <IconButton 
          mt={2}
          mr={5}
          aria-label="Close Menu"
          size="lg"
          bgColor="gray.500"
          _hover={{ 
            bg: "gray.50",
            color: "teal.900"
          }}
          icon={
            <CloseIcon />
          }
          onClick={() => changeDisplay('none')}
        />
      </Flex>
      <Flex
        flexDir="column"
        align="center"
      >
        <NextLink href="/" passHref>
          <Button 
            as="a"
            variant="ghost"
            aria-label="Home"
            _hover={{ 
              bg: "gray.50",
              color: "teal.900"
            }}
            my={5}
            w="100%"
            onClick={() => changeDisplay('none')}
          >
            Home
          </Button>
        </NextLink>
        <NextLink href="/about" passHref>
          <Button 
            as="a"
            variant="ghost"
            aria-label="About"
            my={5}
            _hover={{ 
              bg: "gray.50",
              color: "teal.900"
            }}
            w="100%"
            onClick={() => changeDisplay('none')}
          >
            About
          </Button>
        </NextLink>
        <NextLink href="/projects" passHref>
          <Button 
            as="a"
            variant="ghost"
            aria-label="Projects"
            my={5}
            _hover={{ 
              bg: "gray.50",
              color: "teal.900"
            }}
            w="100%"
            onClick={() => changeDisplay('none')}
          >
            Projects
          </Button>
        </NextLink>
        <NextLink href="/contact" passHref>
          <Button 
            as="a"
            variant="ghost"
            aria-label="Contact"
            my={5}
            _hover={{ 
              bg: "gray.50",
              color: "teal.900"
            }}
            w="100%"
            onClick={() => changeDisplay('none')}
          >
            Contact
          </Button>
        </NextLink>
        
      </Flex>
    </Flex> 
  </Flex>
    
  )
}