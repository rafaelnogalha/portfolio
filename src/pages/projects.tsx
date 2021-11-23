import Head from 'next/head'
import { 
  Text, 
  Box, 
  Container, 
  SimpleGrid,
  Image,
  Link
 } from '@chakra-ui/react'

interface ProjectPageProps{
  data:{
    owner: string
    repo: string
    language: string
    link: string
    image: string
  }[];
}

export default function Projects({ data }: ProjectPageProps){
  
  return(
    <>
      <Head>
        <title>Projects | Nogalha</title>
      </Head>
      <Container
        maxWidth={1480}
        py={{ base: "15vh", md: "15vh" }}
        
        
      >
        <SimpleGrid 
          minChildWidth="320px" 
          spacing="40px" 
        >
          {
            data.map(({image, language, link, repo}) => (
              <Link
                key={repo} 
                href={link}
              >
                <Box 
                  textAlign="center"
                  rounded={'lg'}
                  boxShadow={'lg'}
                  p={10}
                  
                  maxW={500}
                > 
                  <Image
                    borderRadius="sm"  
                    src={image}
                    boxSize="full"
                  ></Image>
      
                  <Text 
                    mt="4"
                    fontSize={["1xl","1xl"]} 
                    fontWeight="bold"
                    color={"gray.200"}
                  >
                    {language}
                  </Text>
                </Box>
              </Link>
            ))
          }
        </SimpleGrid>
      </Container>
    </>
  )
}

export async function getStaticProps(){
  const res = await fetch('https://gh-pinned-repos.egoist.sh/?username=rafaelnogalha')
  const data = await res.json()

  return{
    props:{
      data
    }
  }
}

