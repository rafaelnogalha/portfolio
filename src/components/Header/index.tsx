// import styles from './styles.module.scss'
// import React,{ useState } from 'react'

// import Link from 'next/link';
// import { useRouter } from 'next/router';

// export function Header(){
//   const router = useRouter();

//   return(
//     <>
//       <header className={styles.headerContainer}>
//         <div className={styles.headerContent}>
//           <nav>
//             <Link href="/">
//               <a className={router.pathname == "/" ? styles.active : ""}>
//                 Home
//               </a>
//             </Link>
//             <Link href="/about">
//               <a className={router.pathname == "/about" ? styles.active : ""}>
//                 About me
//               </a>
//             </Link>
//             <Link href="/projects">
//               <a className={router.pathname == "/projects" ? styles.active : ""}>
//                 Projects
//               </a>
//             </Link>
//             <Link href="/contact">
//               <a className={router.pathname == "/contact" ? styles.active : ""}>
//                 Contact
//               </a>
//             </Link>
//             <div className = {styles.icon}>
//               <button type="submit" >Clique em mim</button>
//             </div> 
//           </nav>
//         </div>
//       </header>
//     </>
//   );
// }

import { Flex, Text, HStack, useBreakpointValue} from '@chakra-ui/react'
import { Items } from './Items';
import { Logo } from './Logo';

export function Header(){

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return(
    <Flex 
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      <Logo />
      
      <Items />
    </Flex>
  );
}