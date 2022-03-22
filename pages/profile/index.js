import {
  Text,
  Image,
  Heading,
  Box,
  Container,
  VStack,
  HStack,
  Icon,
  Button
} from "@chakra-ui/react";
import { MdVerified, MdSettings, MdPerson, MdLogout } from "react-icons/md";
import NavigationBar from "../../components/NavigationBar";

export default function Userhome(props) {
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
  const {id, email, name, passsword, bio, profile_image_url, gender, birthdate, sports, km_range} = userObject

  return (
    <>
      {/* Profile Preview */}
      <Box mt='6vh' borderWidth="1px" overflow="hidden">
          <VStack
            w="full"
            flexDirection={"column"}
            justifyContent={"flex-start"}
          >
            <Image
              mb={1}
              borderRadius="full"
              boxSize="150px"
              src={profile_image_url}
              alt="Dan Abramov"
              fit='cover'
              />
            <HStack>
              <Heading pl={5} orientation='vertical'>{name}, {Math.floor((Date.now()-Date.parse(birthdate))/3.154e+10)}</Heading>
              <Icon as={MdVerified} w={6} h={6} color='blue.500'></Icon>
            </HStack>
        </VStack>
      </Box>
      {/* Profile Buttons */}
      <Box mt='2vh' borderWidth="1px" overflow="hidden">
          <VStack
            w="full"
            flexDirection={"column"}
            justifyContent={"flex-start"}
          >
            <Button leftIcon={<MdSettings/>} colorScheme='blue' size='lg' width='50vw'>Settings</Button>
            <Button leftIcon={<MdPerson/>} colorScheme='blue' size='lg' width='50vw'>Edit Profile</Button>
            <Button leftIcon={<MdLogout/>} colorScheme='blue' size='lg' width='50vw'>Logout</Button>
        </VStack>
      </Box>

      <NavigationBar/>
    </>
  );
}
