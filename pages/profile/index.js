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
  Slide,
  useDisclosure,
  Collapse
} from "@chakra-ui/react";
import EventFeed from "../../components/EventFeed";
import styles from "../../styles/login-header.module.css";
import LoginModule from "../../components/LoginModule";
import RegisterModule from "../../components/RegisterModule";

export default function Userhome(props) {
  const { isOpen, onClose, onToggle } = useDisclosure()

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
              <Heading pl={5}>Danasdasd Abraasddasdasdmov</Heading>
              <Text pt={'2'} fontSize="2xl">,27</Text>
            </VStack>
            <Text fontSize="xl">
              I am a software developer working on React. I like playing
              spikeball, tennis, and volleyball. I am looking for new friends to
              play these sports with in Vancouver as I just moved here.
            </Text>
          </VStack>
          <VStack flexDirection={"row"} justifyContent={"flex-end"}>
            <Box flexDirection={'column'} justifyContent={'flex-end'} pr={5} pb={5}>
              <Button onClick={onToggle}  colorScheme="teal" variant={'outline'}>Update</Button>
              <Collapse in={isOpen} animateOpacity>
                <Box
                  p='40px'
                  mt='4'
                  rounded='md'
                  shadow="md"
                  >
                  <RegisterModule onClose={onClose}>
                  </RegisterModule>
                </Box>
              </Collapse>
            </Box>
          </VStack>
        </Box>
      </Container>
      <Container maxW="container.xl" p={0}>
        <Flex h="100vh" py={3}>
          <EventFeed profileEvents={true} ></EventFeed>
        </Flex>
      </Container>
    </>
  );
}
