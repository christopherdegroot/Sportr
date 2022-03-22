import Link from "next/link";
import Head from "next/head";
import {
  Button,
  Text,
  Image,
  Heading,
  Box,
  Container,
  Flex,
  VStack,
} from "@chakra-ui/react";
import EventFeed from "../../components/EventFeed";
import styles from "../../styles/login-header.module.css";

export default function Userhome(props) {
  return (
    <>
      <Container pt='10' maxW="container.md">
      <Box>
      </Box>
        <Box rounded="md" borderWidth="1px" borderRadius="lg" overflow="hidden">
          <VStack
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            w="full"
            h="full"
            p={10}
          >
            <VStack
              w="full"
              flexDirection={"row"}
              justifyContent={"flex-start"}
            >
              <Image
                mb={1}
                borderRadius="full"
                boxSize="150px"
                src="https://bit.ly/dan-abramov"
                alt="Dan Abramov"
              />
              <Heading pl={5}>Dan Abramov</Heading>
              <Text pt={'2'} fontSize="2xl">, 27</Text>
            </VStack>
            <Text fontSize="xl">
              I am a software developer working on React. I like playing
              spikeball, tennis, and volleyball. I am looking for new friends to
              play these sports with in Vancouver as I just moved here.
            </Text>
          </VStack>
          <VStack flexDirection={"row"} justifyContent={"flex-end"}>
            <Box pr={5} pb={5}>
              <Button  colorScheme="teal" variant={'outline'}>  Update </Button>
            </Box>
          </VStack>
        </Box>
      </Container>
      <Container maxW="container.xl" p={0}>
        <Flex h="100vh" py={3}>
          <EventFeed></EventFeed>
        </Flex>
      </Container>
    </>
  );
}
