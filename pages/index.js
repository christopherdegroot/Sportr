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
      <VStack
        justifyContent={"space-between"}
        minH={"844"}
        bgGradient={"linear-gradient( #e66465, #9198e5)"}
      >
        <Head>
          <link rel="icon" href="/images/template (2).png" />
          <meta
            name="description"
            content="Learn how to build a personal website using Next.js"
          />
          <meta
            property="og:image"
            content={`https://og-image.vercel.app/${encodeURI(
              siteTitle
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>

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
            <Heading pb={1}>Sportr</Heading>
          </HStack>
          <VStack>
            <Text mb={3} fontWeight={"bold"} px={7} textAlign={"center"}>
              Sportr is an app to find pick-up <br></br> style sports games{" "}
            </Text>
            <Text fontWeight={"semibold"} px={7} textAlign={"center"}>
              Find the sports you want to play happening near you
            </Text>
          </VStack>
        </VStack>
        <VStack>
          <Link href="/register">
            <Button w="15em" name={"Register"}>
              Register
            </Button>
          </Link>
          <Box p={5} pb={10}>
            <Button w="15em" onClick={onToggle}>
              Login
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
    </>
  );
}
