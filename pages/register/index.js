import Link from 'next/link'
import Head from 'next/head'
import styles from '../../styles/login-header.module.css'
import MyButton from '../../components/MyButton'
import Register from '../../components/Register'

import { Checkbox, Button, Select, FormControl, FormLabel, Input, VStack, Heading, Text, SimpleGrid, GridItem } from "@chakra-ui/react";

const Login = (props) => {
  return (
    <>
    <Register>
      
    </Register>
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

export default Login;