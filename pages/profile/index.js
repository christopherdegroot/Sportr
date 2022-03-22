import {
  Text,
  Image,
  Heading,
  Box,
  Container,
  VStack,
} from "@chakra-ui/react";
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
      <Container pt='10' mb='100' maxW="container.md">
      <Box>
      </Box>
        <Box rounded="md" borderWidth="1px" borderRadius="lg" overflow="hidden">
          <VStack
            flexDirection="column"
            justify="flex-start"
            align="flex-start"
            w="full"
            h="full"
            p={10}
          >
            <VStack
              w="full"
              flexDirection={"column"}
              justifyContent={"flex-start"}
            >
              <Image
                mb={1}
                borderRadius="full"
                boxSize="150px"
                src="https://bit.ly/dan-abramov"
                alt="Dan Abramov"
              />
              <Heading pl={5}>{name}</Heading>
            </VStack>
            <Text fontSize="xl" align='center'>{bio}</Text>
          </VStack>
        </Box>
      </Container>
      <NavigationBar/>
    </>
  );
}
