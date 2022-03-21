import {
  Button,
  PhoneIcon,
  AddIcon,
  WarningIcon,
  Icon,
  Badge,
  StarIcon,
  Image,
  Box,
  SimpleGrid,
  Container,
  VStack,
  Heading,
} from "@chakra-ui/react";

function SportEvent(props) {
  return (
    <>
      <Box _hover={{ boxShadow: 'xl' }} p='6' rounded='md' bg='white' borderWidth="2px" borderRadius="lg" overflow="hidden">
        <Image src={props.props.imageUrl}/>

        <Box  p="6">
          <Box display="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme="teal">
              New
            </Badge>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              {props.props.signedUp} signed up &bull; {props.props.spotsRemaining} spots
              remaining
            </Box>
          </Box>

          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {props.props.title}
          </Box>
          <Box
            mt="1"
            as="h4"
            lineHeight="tight"
          >
            {props.props.description}
          </Box>


        </Box>
        <Box display='flex' alignItems='center' justifyContent='flex-end' >
          <Button colorScheme='red'  m={2} marginBottom='4' >Swipe Left</Button>
          <Button colorScheme='green' m={2} marginRight='4' marginBottom='4'>Swipe Right</Button>
        </Box>
      </Box>
    </>
  );
}

export default SportEvent;
