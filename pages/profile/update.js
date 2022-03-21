import Link from 'next/link'
import Head from 'next/head'
import styles from '../../styles/login-header.module.css'
import UpdateProfile from '../../components/UpdateProfile'

import { Checkbox, Button, Select, FormControl, FormLabel, Input, VStack, Heading, Text, SimpleGrid, GridItem } from "@chakra-ui/react";

const Login = (props) => {

  userObject = {
    id:4,
    email:"noahthedev@hotmail.com",
    name:"Noah V",
    password:"haha",
    bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris purus nisl, faucibus nec laoreet ultricies, fringilla et dolor. Pellentesque id odio vehicula, mollis nibh in, congue tortor. Etiam pellentesque sem.",
    profile_imgae_url:"https://www.boredpanda.com/blog/wp-content/uploads/2021/08/funny-monkeys-56-612393fdd1081__700.jpg",
    gender:"male",
    birthdate:'1999-12-31',
    sports: ['basketball', 'soccer', 'running', 'spikeball'],
    km_range:10
  }

  return (
    <>
    <UpdateProfile>
      
    </UpdateProfile>
    </>
  )
  
}

export default Login;