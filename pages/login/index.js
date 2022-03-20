import Link from 'next/link'
import Head from 'next/head'
import styles from '../../styles/login-header.module.css'
import { Heading, VStack, Button, SimpleGrid, GridItem, FormControl, FormLabel, Input } from "@chakra-ui/react";
import LoginModule from '../../components/LoginModule';

export default function Login(props) {
  return (
    <>
      <div>
        <LoginModule>
          
        </LoginModule>
      <br></br>
      </div>
      {!props.home && (
        <div className={styles.backToHome}>
         <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
        
      )}
      
    </>
    
  )
}
