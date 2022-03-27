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
import NavigationBar from "../../components/NavigationBar";
import UpdateProfile from "../../components/UpdateProfile"

export default function Userhome(props) {
  const { isOpen, onClose, onToggle } = useDisclosure()

  const userObject = {
    id:4,
    email:"noahthedev@hotmail.com",
    name:"Noah V",
    password:"haha",
    bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris purus nisl, faucibus nec laoreet ultricies, fringilla et dolor. Pellentesque id odio vehicula, mollis nibh in, congue tortor. Etiam pellentesque sem.",
    profile_image_url:"https://www.boredpanda.com/blog/wp-content/uploads/2021/08/funny-monkeys-56-612393fdd1081__700.jpg",
    gender:"male",
    birthdate:'1999-12-31',
    sports: ['basketball', 'soccer', 'running', 'spikeball'],
    km_range:10
  }

  return (
    <>
      <Container pb={20} backgroundColor={'rgb(247, 247, 247)'} pt='5' maxW="container.md">
      <Box>
      </Box>
        <VStack justifyContent={'space-between'} minH={'730'} backgroundColor={'white'} rounded="md" borderWidth="1px" borderRadius="lg" overflow="hidden">
          <VStack
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            w="full"
            h="full"
            px={10}
            pt={10}
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
          <VStack pt={5} justifyContent={'center'} >
            <VStack flexDirection={'column'} alignContent={'flex-end'} justifyContent={'center'} pb={5}>
              <Collapse in={isOpen} animateOpacity>
                <Box justifyContent={'center'}
                  mt='4'
                  pb='4'
                  rounded='md'
                  shadow="md"
                  >
                  <UpdateProfile onClose={onClose} user={userObject}></UpdateProfile>
                  <VStack>
                    <Button justifyContent={'center'} w={300} onClick={onToggle} colorScheme="teal" variant={'solid'}>Update</Button>
                  </VStack>
                </Box>
              </Collapse>
              <Button justifyContent={'center'} w={300} onClick={onToggle} colorScheme="teal" variant={'solid'}>Update</Button>
            </VStack>
          </VStack>
        </VStack>
      </Container>
      
      <NavigationBar/>
    </>
  );
}
