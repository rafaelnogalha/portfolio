import { Flex, Container, Stack, Box, Heading, Text, Image, Center } from '@chakra-ui/react';
import Head from 'next/head'

import styles from './home.module.scss';


export default function Home() {
 

  return(
    <>
      <Head>
        <title>HomePage | Nogalha</title>        
      </Head>
      <Container
        maxWidth={1480}
        py={{ base: "15vh", md: "15vh" }}
        alignItems="center"
        display="flex"
        justifyContent="space-between"
        textAlign={['center', 'center', 'start', 'start']} 
      >
        <Stack
          w={'full'}
        >
          <Flex
            justify={['center', 'center', 'flex-start', 'flex-start']}
          >
            <Text
              fontSize={["1xl","2xl"]}
            >
              👋Hey, welcome
            </Text>
          </Flex>
          <Flex
            justify={[
              'center', 
              'center', 
              'flex-start', 
              'flex-start'
            ]}
          >
            <Heading>
              <Text
                fontSize={["1xl","6xl"]}
              >
                This is{" "}
                  <Text 
                    as="span"
                    color={'blue.500'}
                  >
                    Rafael's Nogalha{" "}
                  </Text>
                world code.
              </Text>
            </Heading>

          </Flex>
          
          <Flex
            justify={['center', 'center', 'flex-start', 'flex-start']}
          >
            <Text
              fontSize={["1xl","2xl"]}
            >
              Be my Guest.{" "}
              <Text 
                as="span"
                color={'blue.500'}
              >
                Welcome!
              </Text>
            </Text>
          </Flex>
        </Stack>
          
          <Image 
            borderRadius="full"
            alt={'home pic'}
            boxSize="500px"
            display={['none', 'none', 'flex', 'flex']}
            src="/profile_home_pic.png"
          />
        
      </Container>
    </>
  )
}

