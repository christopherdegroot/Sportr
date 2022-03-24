import Link from 'next/link'
import Head from 'next/head'
import styles from '../../styles/login-header.module.css'
import CreateEvent from '../../components/CreateEvent'
import NavigationBar from '../../components/NavigationBar'

import { Checkbox, Button, Select, FormControl, FormLabel, Input, VStack, Heading, Text, SimpleGrid, GridItem } from "@chakra-ui/react";

const NewEvent = (props) => {
  return (
    <>
    <CreateEvent>
    </CreateEvent>
    
    <NavigationBar/>
    </>
  )
  
}

export default NewEvent;