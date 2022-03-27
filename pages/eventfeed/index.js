import Link from 'next/link'
import Head from 'next/head'
import { ButtonGroup, Button, Box, Container, Flex, VStack } from '@chakra-ui/react'
import EventFeed from '../../components/EventFeed'
import styles from '../../styles/login-header.module.css'
import NavigationBar from '../../components/NavigationBar'
import EventToggleButton from '../../components/EventToggleButton'
import { useState } from 'react'

import useApplicationData from '../../hooks/useApplicationData'
import { getEventsForUser } from '../../helpers/selectors'

export default function Userhome(props) {
  const [leftToggle, setLeftToggle] = useState(true)
  const swapToggle = function(tf) {
    setLeftToggle(tf)
  }
  return (
    <>
    <Container backgroundColor={'rgb(247, 247, 247)'} maxW="container.xl" p={0}>
      <Flex flexDirection={'column'} pb={20}>

      <>
          <VStack mt='10' flexDirection={'row'}  justifyContent={'center'}>
          {leftToggle && (<ButtonGroup size='sm' isAttached variant='outline'>
            <Button onClick={()=>{swapToggle(true)}} variant={'solid'} colorScheme={'teal'}  mr='-px'>Find Events</Button>
            <Button onClick={()=>{swapToggle(false)}} variant={'outline'} colorScheme={'teal'} mr='-px'>My Events</Button>
          </ButtonGroup>)}
          {!leftToggle && (<ButtonGroup size='sm' isAttached variant='outline'>
            <Button onClick={()=>{swapToggle(true)}} variant={'outline'} colorScheme={'teal'}  mr='-px'>Find Events</Button>
            <Button onClick={()=>{swapToggle(false)}} variant={'solid'} colorScheme={'teal'} mr='-px'>My Events</Button>
          </ButtonGroup>)}
          </VStack>
        </>
        {leftToggle && (<EventFeed findEvents={true}>
      </EventFeed>)}
      {!leftToggle && (<EventFeed profileEvents={true}>
      </EventFeed>)}

      </Flex>
    </Container>
    <NavigationBar/>
   
    </>
  )
}


