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
      <Container backgroundColor={'rgb(247, 247, 247)'} pt='5' maxW="container.md">
      <Box>
      </Box>
        <Box backgroundColor={'white'} rounded="md" borderWidth="1px" borderRadius="lg" overflow="hidden">
          <VStack
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            w="full"
            h="full"
            px={10}
            pt={5}
          >
            <VStack
              w="full"
              flexDirection={"column"}
              justifyContent={"center"}
            >
              <Image
                mb={1}
                borderRadius="full"
                boxSize="150px"
                src="https://bit.ly/dan-abramov"
                alt="Dan Abramov"
              />
              <VStack flexDirection={'row'} alignItems='flex-end'>
                <Text fontWeight={'semibold'} fontSize={'3xl'}>Dan</Text>
                <Text pl={2} pb={1}  fontSize={'lg'}>27</Text>
              </VStack>
            </VStack>
            <Text textAlign={'center'} fontSize="md">
              I am a software developer working on React. I like playing
              spikeball, tennis, and volleyball. I am looking for new friends to
              play these sports with in Vancouver as I just moved here.
            </Text>
          </VStack>
          <VStack pt={5} flexDirection={"row"} justifyContent={"flex-end"}>
            <Box flexDirection={'column'} justifyContent={'flex-end'} pr={5} pb={5}>
              <Button onClick={onToggle} colorScheme="teal" variant={'outline'}>Update</Button>
              <Collapse in={isOpen} animateOpacity>
                <Box
                  mt='4'
                  pb='4'
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
      <Container backgroundColor={'blue'} maxW="container.xl" p={0}>
        <Flex backgroundColor={'rgb(247, 247, 247)'} h="100vh" py={3}>
          <EventFeed profileEvents={true} ></EventFeed>
        </Flex>
      </Container>
    </>
  );
}
