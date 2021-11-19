import Head from 'next/head'
import { Text, Container } from '@chakra-ui/react'

export default function About(){
  return(
    <>
      <Head>
        <title>AboutMe | Nogalha</title>
      </Head>
      <Container
        maxWidth={1480}
        py={{ base: "15vh", md: "30vh" }}
        display="flex"
        justifyContent="space-between"
      >
        <Text
          fontSize={["xl","2xl"]}
          textAlign={['center', 'center', 'center', 'center']} 
        >
          I'm a technician, graduated, in {' '}<Text as="span" color={'blue.500'}>
            Systems Development{' '}
          </Text>from the Federal Institute 
          of Education, Science and Technology of Brasília. Now,
          i'm current student of <Text as="span" color={'blue.500'}>
            Computer Science{' '}
          </Text> at University of Brasilia,
          i'm 21 years old and learning about clean code with <Text as="span" color={'blue.500'}>
          NodeJs{' '}
          </Text>, <Text as="span" color={'blue.500'}>
          ReactJs{' '}
          </Text> and{' '}
          <Text as="span" color={'blue.500'}>
            NextJs{' '}
          </Text>. I have experience with <Text as="span" color={'blue.500'}>
          C/C++{' '}
          </Text> languages and <Text as="span" color={'blue.500'}>
          Python{' '}
          </Text>. 
          Everyday, i have been learning about something new. So, let's work together!
        </Text>
      </Container>
    </>
  )
}