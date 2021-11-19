import Head from 'next/head'
import { 
  Stack,
  Text, 
  FormControl, 
  Box, 
  Input, 
  Textarea, 
  Button,
  Flex,
  Heading
} from '@chakra-ui/react'

export default function Contact(){
  return(
    <>
      <Head>
        <title>ContactMe | Nogalha</title>
      </Head>
      <Flex
        py={{ base: "10vh", md: "10vh" }}
        align={'center'}
        justify={'center'}
      >
        <Stack 
          spacing={8} 
          mx={'auto'} 
          maxW={'lg'} 
          py={12} 
          px={6}
        >  
          <Box
            rounded={'lg'}
            boxShadow={'lg'}
            p={10}>
            <Stack 
              spacing={4}
            >
              <Stack align={'center'}>
                <Heading fontSize={'4xl'}>Contact Me</Heading>
                <Text fontSize={'lg'} color={'gray.100'}>
                  For we work <Text as="span" color={'blue.500'}>together</Text> ✌️
                </Text>
              </Stack>
              <FormControl id="name">
                <Input placeholder="Name" type="name" />
              </FormControl>
              <FormControl id="email">
                <Input placeholder="Email" type="email" />
              </FormControl>
              <FormControl id="message">
                <Textarea placeholder="Message" type="textarea" />
              </FormControl>
              <Stack spacing={10}>
                <Button
                  bg={'blue.500'}
                  color={'gray.900'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Send
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  )
}