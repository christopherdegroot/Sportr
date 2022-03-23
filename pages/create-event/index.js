import Link from 'next/link'
import Head from 'next/head'
import styles from '../../styles/login-header.module.css'
import CreateEvent from '../../components/CreateEvent'

import { Checkbox, Button, Select, FormControl, FormLabel, Input, VStack, Heading, Text, SimpleGrid, GridItem } from "@chakra-ui/react";

const NewEvent = (props) => {
  return (
    <>
    <VStack flexDirection='row' paddingBottom='3em'>
      {!props.home && (
        <div className={styles.backToHome}>
         <Link href="/">
            ← Back to home
          </Link>
        </div>
      )}
    </VStack>
    </>
  )
  
}

export default NewEvent;