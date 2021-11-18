import { Flex, Button, IconButton } from '@chakra-ui/react'
import { useState } from 'react'
import { CloseIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'

export function ResponsiveItems(){
  const [display, changeDisplay] = useState('none')
  return(
    <Flex
        w="100vw"
        bgColor="gray.50"
        zIndex={20}
        h="100vh"
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
          mr={2}
          aria-label="Close Menu"
          size="lg"
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
            w="100%"
            onClick={() => changeDisplay('none')}
          >
            About
          </Button>
        </NextLink>
        <NextLink href="/contact" passHref>
          <Button 
            as="a"
            variant="ghost"
            aria-label="Contact"
            my={5}
            w="100%"
            onClick={() => changeDisplay('none')}
          >
            Contact
          </Button>
        </NextLink>
        <NextLink href="/projects" passHref>
          <Button 
            as="a"
            variant="ghost"
            aria-label="Projects"
            my={5}
            w="100%"
            onClick={() => changeDisplay('none')}
          >
            Projects
          </Button>
        </NextLink>
      </Flex>
    </Flex>
  )
}