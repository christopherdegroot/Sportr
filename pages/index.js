import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import {
  HStack,
  IconButton,
  Icon,
  Heading,
  Text,
  Slide,
  useDisclosure,
  ChakraProvider,
  Box,
  Button,
  Fade,
  VStack,
} from "@chakra-ui/react";
import LoginModule from "../components/LoginModule";
import { MdSportsTennis, MdOutlineSportsHandball } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

export default function Home() {
  const { isOpen, onClose, onToggle } = useDisclosure();
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
              With Sportr you can set distance limits and sport types to be notified of events starting near you. You can create events: input the sport you want to an event for, date, and set other preferences. We&apos;ll take care of the rest and find others interested in your activity and let the community join you!
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
                  bg='teal.500'
                  rounded='md'
                  shadow="md"
                  >
                  <LoginModule onClose={onClose}>
                  </LoginModule>
                </Box>
              </Slide>
            </Box>

        <Head>
          <title>{siteTitle}</title>
        </Head>
        <VStack>
          <HStack pt={230} pb={200}>
            <Image
              src="https://i.imgur.com/2brO7zk.png"
              width={30}
              height={60}
            />
            <Heading color={'black'} pb={1}>Sportr</Heading>
          </HStack>
          <VStack>
            <Text color={'black'} mb={3} fontWeight={"bold"} px={7} textAlign={"center"}>
              Sportr is an app to find pick-up <br></br> style sports games{" "}
            </Text>
            <Text color={'black'} fontWeight={"semibold"} px={7} textAlign={"center"}>
              Find the sports you want to play happening near you
            </Text>
          </VStack>
        </VStack>
        <VStack>
          <Link href="/register">
            <Button fontWeight={'thin'} variant={'outline'} colorScheme={'black'} color={'black'} w="15em" name={"Register"}>
              REGISTER
            </Button>
          </Link>
          <Box p={5} pb={10}>
            <Button fontWeight={'thin'} variant={'outline'} colorScheme={'black'} color={'black'} w="15em" onClick={onToggle}>
              SIGN IN
            </Button>
            <Slide direction="bottom" in={isOpen}>
              <Box
                p="40px"
                color="white"
                mt="4"
                bg="teal.500"
                rounded="md"
                shadow="md"
              >
                <LoginModule onClose={onClose}></LoginModule>
              </Box>
            </Slide>
          </Box>
        </VStack>
      </VStack>
      </Layout>
      </ChakraProvider>
    </>
  );
}
