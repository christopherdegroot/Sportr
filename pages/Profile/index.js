import Link from 'next/link'
import Head from 'next/head'
import { Container, Flex, VStack } from '@chakra-ui/react'
import Cart from '../../components/cart'
import Register from '../../components/Register'

export default function Userhome() {
  return (
    <>
    <Container maxW="container.xl" p={0}>
      <Flex h='100vh' py={20}>
        <Cart >

        </Cart>
        <Register >
          
        </Register>
        <Cart >

        </Cart>
      </Flex>
    </Container>  
    </>
  )
}
