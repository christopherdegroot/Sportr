import Link from 'next/link'
import Head from 'next/head'
import { Box, Container, Flex, VStack } from '@chakra-ui/react'
import EventFeed from '../../components/EventFeed'
import styles from '../../styles/login-header.module.css'


export default function Userhome(props) {
  return (
    <>
    <Container backgroundColor={'rgb(247, 247, 247)'} maxW="container.xl" p={0}>
      <Flex h='100vh' py={20}>
      <EventFeed findEvents={true}>

      </EventFeed>
      </Flex>
    </Container>
   
    </>
  )
}


