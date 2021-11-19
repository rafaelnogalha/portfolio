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
    link: string
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
        alignItems="center"
        justifyContent="space-between"
        textAlign="center">
        <SimpleGrid 
          minChildWidth="180px" 
          spacing="40px"
        >
          {
            data.map(({owner, repo, link}) => (
              <Link
                href={link}
              >
                <Box 
                  rounded={'lg'}
                  boxShadow={'lg'}
                  p={10}
                  key={owner} 
                  borderRadius="lg" 
                  overflow="hidden"
                  maxW="sm" 
                  borderWidth="1px"
                > 
                  <Image
                    src={"https://github.com/libgit2/libgit2sharp/raw/master/square-logo.png"}
                  ></Image>
      
                  <Text 
                    fontSize={["1xl","1xl"]} 
                  >
                    {repo} 
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


  //console.log(data) // Prints result from `response.json()` in getRequest


  // console.log(res)

  return{
    props:{
      data
    }
  }
}

// export async function getStaticProps(){
//   const httpLink = createHttpLink({
//     uri: 'https//api.github.com/graphql',
//   });
  
//   const authLink = setContext((_, { headers }) => {
//     return {
//       headers: {
//         ...headers,
//         authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}` ,
//       }
//     }
//   });
  
//   const client = new ApolloClient({
//     link: authLink.concat(httpLink),
//     cache: new InMemoryCache()
//   });

//   const { data } = await client.query({
//     query: gql`
//       {
//         user(login: "rafaelnogalha") {
//           pinnedItems(first: 6) {
//             totalCount
//             edges {
//               node {
//                 ... on Repository {
//                   id
//                   name
//                   url
//                   stargazerCount
//                 }
//               }
//             }
//           }
//         }
//       }  
//     `
//   })

//   const { user } = data;
//   const pinnedItems = user.pinnedItems.edges.map( (node:any) => node);

//   return {
//     props:{
//       pinnedItems
//     }
//   }
// }