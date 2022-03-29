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


import useApplicationData from "../../hooks/useApplicationData";
import { getUserDataForProfile } from "../../helpers/selectors";

export default function Userhome(props) {
  const { state } = useApplicationData();
  console.log('State: ',state);

  const userData = getUserDataForProfile(state, 1) // set user_id with session\
  console.log('userData', userData)
  const { name, bio, birth_date } = userData[0] ? userData[0] : ''
  
  const { isOpen, onClose, onToggle } = useDisclosure()



  return (
    <>
      <Container state={state} pb={20} backgroundColor={'rgb(247, 247, 247)'} pt='5' maxW="container.md">
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
                <Text fontWeight={'semibold'} fontSize={'3xl'}>{name ? name.split(' ')[0] : ''}</Text>
                <Text pl={2} pb={1}  fontSize={'lg'}>{birth_date ? Math.floor((Date.now() - Date.parse(birth_date))/3.154e+10) : ''}</Text>
              </VStack>
            </VStack>
            <Text textAlign={'center'} fontSize="md">{ bio ? bio : ''}</Text>
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
                  <UpdateProfile state={state} onClose={onClose} user={userData}></UpdateProfile>
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
