import Link from 'next/link'
import Head from 'next/head'
import styles from '../../styles/login-header.module.css'
import CreateEvent from '../../components/CreateEvent'
import NavigationBar from '../../components/NavigationBar'
import { getCookie } from 'cookies-next';

import { Checkbox, Button, Select, FormControl, FormLabel, Input, VStack, Heading, Text, SimpleGrid, GridItem } from "@chakra-ui/react";
import useApplicationData from "../../hooks/useApplicationData";
const NewEvent = (props) => {
  const { state, createEvent } = useApplicationData();
  return (
    <>
    <CreateEvent state={state} createEvent={createEvent} user_id={getCookie('user_id')}>
    </CreateEvent>
    
    <NavigationBar/>
    </>
  )
  
}

export default NewEvent;