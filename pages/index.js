import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { Slide, useDisclosure, ChakraProvider, Box, Button, Fade, VStack } from "@chakra-ui/react";
import LoginModule from '../components/LoginModule'

export default function Home() {
  const { isOpen, onClose, onToggle } = useDisclosure()
  return (
    <>
    <ChakraProvider>
    <Layout home>
            <Head>
              <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
              <p>Finding it hard to find people to play sports with? All your spike-ball mates are busy? Sportr is an app to find pick-up style sports games. Want to play ball hockey in the neighborhood again? Want to find a pickup basketball match? Want to find a ladies yoga group? Sportr is your answer. </p>
                <br></br>
                <p>
              With Sportr you can set distance limits and sport types to be notified of events starting near you. You can create events: input the sport you want to an event for, date, and set other preferences. We'll take care of the rest and find others interested in your activity and let the community join you!
              </p>
             
            </section>
      
            <br></br>
            <div className={utilStyles.userButtons}>
              <VStack>
            <Link href="/register">
              <Button w='9em' name={'Register'}>Register</Button> 
            </Link>
            <Box p={4} >
              <Button w='9em' onClick={onToggle} >Login</Button>
              <Slide direction='bottom' in={isOpen}>
                <Box
                  p='40px'
                  color="white"
                  mt='4'
                  bg='teal'
                  rounded='md'
                  shadow="md"
                  >
                  <LoginModule onClose={onClose}>
                  </LoginModule>
                </Box>
              </Slide>
            </Box>



            </VStack>
            </div>
        </Layout>
        </ChakraProvider>
        
        </>
  )
}
