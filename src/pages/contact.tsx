import Head from 'next/head'
import { 
  Stack,
  Text, 
  FormControl, 
  Box, 
  Input, 
  Textarea, 
  Flex,
  Heading,
  Button
} from '@chakra-ui/react'

export default function Contact(){

  function sendEmail(){
    const formContact = document.getElementById('formContact')
    console.log(formContact)

    formContact?.addEventListener('submit', (e) =>{
      e.preventDefault()
      const name = (document.getElementById('name') as HTMLInputElement).value
      const email = (document.getElementById('email') as HTMLInputElement).value
      const message = (document.getElementById('message') as HTMLInputElement).value
      console.log(name)
      
      fetch('/api/sendEmailContact', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          message
        })
      }).then((response) => {
        alert("Message success sent")
      }).catch((error) => {
        
      })
    })
  }

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
                <form 
                  id="formContact"  
                >
                  <FormControl>
                    <Input id="name" placeholder="Name" type="name" />
                  </FormControl>
                  <FormControl>
                    <Input id="email" placeholder="Email" type="email" />
                  </FormControl>
                  <FormControl>
                    <Textarea id="message" placeholder="Message" type="textarea" />
                  </FormControl>
                    
                  <Stack spacing={10}>
                      <Button
                        onClick={sendEmail}
                        type="submit"
                        bg={'blue.500'}
                        color={'gray.900'}
                        _hover={{
                          bg: 'blue.500',
                        }}>
                        Send
                      </Button>
                    </Stack>
                </form>
              </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  )
}