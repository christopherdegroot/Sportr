import Link from "next/link";
import Head from "next/head";
import {
  Button,
  Text,
  Image,
  Box,
  Container,
  VStack,
  useDisclosure,
  Collapse
} from "@chakra-ui/react";
import NavigationBar from "../../components/NavigationBar";
import UpdateProfile from "../../components/UpdateProfile"
import { getCookie } from 'cookies-next';


import useApplicationData from "../../hooks/useApplicationData";
import { useEffect, useState } from "react";
import { getUserDataForProfile } from "../../helpers/selectors";

export default function Userhome(props) {
  const { state, updateUser } = useApplicationData();

  const userData = getUserDataForProfile(state, Number(getCookie('user_id'))) // set user_id with session\
  const { name, bio, birth_date, profile_image_url } = userData[0] ? userData[0] : ''

  const [ bioValue, setBioValue ] = useState('')
  const [ rangeValue, setRangeValue ] = useState(0)
  const [ sportsValue, setSportsValue ] = useState({})
  const [ checkedValue, setCheckedValue ] = useState([])

  useEffect(() => {
    setBioValue( userData[0] ? userData[0].bio : '')
    setRangeValue( userData[0] ? userData[0].km_range : 0 )
    setSportsValue( userData[0] ? userData[0].sports : {} )
  }, [state])
  
  const { isOpen, onClose, onToggle } = useDisclosure()
  const newCheckBoxValues = Object.keys(sportsValue).filter( sport => sportsValue[sport])

  return (
    <>
      { Object.keys(sportsValue).filter( sport => sportsValue[sport]).length >= 1 && newCheckBoxValues.length >= 1 && <Container state={state} pb={20} backgroundColor={'rgb(247, 247, 247)'} pt='5' maxW="container.md">
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
                src={profile_image_url ? profile_image_url : ''}
                alt="Profile Photo"
              />
              <VStack flexDirection={'row'} alignItems='flex-end'>
                <Text fontWeight={'semibold'} fontSize={'3xl'}>{name ? name.split(' ')[0] : ''}</Text>
                <Text pl={2} pb={1}  fontSize={'lg'}>{birth_date ? Math.floor((Date.now() - Date.parse(birth_date))/3.154e+10) : ''}</Text>
              </VStack>
              <Text align={'center'} width={'100%'} fontSize="md">{ bioValue }</Text>
            </VStack>
          </VStack>
          <VStack pt={5} justifyContent={'center'} >
          <Button justifyContent={'center'} w={300} onClick={onToggle} colorScheme="teal" variant={'solid'}>Update</Button>
            <VStack flexDirection={'column'} alignContent={'flex-end'} justifyContent={'center'} pb={5}>
              <Collapse in={isOpen} animateOpacity>
                <Box justifyContent={'center'}
                  mt='4'
                  pb='4'
                  rounded='md'
                  shadow="md"
                  >
                  <UpdateProfile newCheckBoxValues={newCheckBoxValues} onToggle={onToggle} onClose={onClose} updateUser={updateUser} user={userData[0]} user_id={getCookie('user_id')} checked={[checkedValue, setCheckedValue]} bio={[bioValue, setBioValue]} range={[rangeValue, setRangeValue]} sports={[sportsValue, setSportsValue]} ></UpdateProfile>
                </Box>
              </Collapse>
              
            </VStack>
          </VStack>
        </VStack>
      </Container>}
      
      <NavigationBar/>
    </>
  );
}
