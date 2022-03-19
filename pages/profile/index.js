import Link from 'next/link'
import Head from 'next/head'
import { Container, Flex, VStack } from '@chakra-ui/react'
import Cart from '../../components/cart'
import Details from '../../components/details'
import styles from '../../styles/login-header.module.css'


export default function Userhome(props) {
  return (
    <>
    <Container maxW="container.xl" p={0}>
      <Flex h='100vh' py={20}>
      <Cart >
        
      </Cart>
      <Details >
        
      </Details>
      </Flex>
    </Container>
    <div>
      {!props.home && (
        <div className={styles.backToHome}>
         <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>  
    </>
  )
}
