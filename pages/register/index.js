import Link from 'next/link'
import Head from 'next/head'
import styles from '../../styles/login-header.module.css'
import Register from '../../components/Register'

import { Checkbox, Button, Select, FormControl, FormLabel, Input, VStack, Heading, Text, SimpleGrid, GridItem } from "@chakra-ui/react";

const Login = (props) => {
  return (
    <>
    <Register>
      
    </Register>
    <VStack flexDirection='row' paddingBottom='3em'>
      {!props.home && (
        <div className={styles.backToHome}>
         <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </VStack>
    </>
  )
  
}

export default Login;