import Link from 'next/link'
import Head from 'next/head'
import { ButtonGroup, Button, Box, Container, Flex, VStack } from '@chakra-ui/react'
import EventFeed from '../../components/EventFeed'
import styles from '../../styles/login-header.module.css'
import NavigationBar from '../../components/NavigationBar'
import EventToggleButton from '../../components/EventToggleButton'
import { useEffect, useState } from 'react'
import useSWR from 'swr'
const fetcher = (...args) => fetch(...args).then((res) => res.json())
  


export default function Userhome(props) {
  const [leftToggle, setLeftToggle] = useState(true)
  const swapToggle = function(tf) {
    setLeftToggle(tf)
  }
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)


  // const { data, error } = useSWR('/api/v1/events/1', fetcher)
  // console.log(data)
  // if (error) return <div>Failed to load</div> 
  // if (!data) return <div>Loading...</div>

  useEffect(() => {
    setLoading(true)
    fetch('api/v1/events/')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
        console.log('******************** logging data from useEffect', data)
      })
  }, [])

  useEffect(() => {
    setLoading(true)
    fetch('api/v1/users/')
      .then((res) => res.json())
      .then((userData) => {
        setData(userData)
        setLoading(false)
        console.log('############### logging data from useEffect', userData)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>


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
        {leftToggle && (<EventFeed data={data} findEvents={true}>
      </EventFeed>)}
      {!leftToggle && (<EventFeed data={data} profileEvents={true}>
      </EventFeed>)}

      </Flex>
    </Container>
    <NavigationBar/>
   
    </>
  )
}


