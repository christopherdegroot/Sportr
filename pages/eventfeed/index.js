import Link from 'next/link'
import Head from 'next/head'
import { Box, Container, Flex, VStack } from '@chakra-ui/react'
import EventFeed from '../../components/EventFeed'
import styles from '../../styles/login-header.module.css'
import NavigationBar from '../../components/NavigationBar'


export default function Userhome(props) {
  return (
    <>
    <Container backgroundColor={'rgb(247, 247, 247)'} maxW="container.xl" p={0}>
      <Flex  pb={20}>
      <EventFeed findEvents={true}>

      </EventFeed>
      </Flex>
    </Container>
    <NavigationBar/>
   
    </>
  )
}


