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
import React from "react";

function SportEvent(props) {
  const onClose = props.onClose;
  const [show, setShow] = React.useState(true)
  return (
    <>
     {show && (<Box
        _hover={{ boxShadow: "xl" }}
        rounded="md"
        bg="white"
        borderWidth="2px"
        borderRadius="lg"
        overflow="hidden"
      >
        <Image src={props.event.imageUrl}/>
        <Box pl='2'>
          <Box pl='1' pt={5} display="flex" alignItems="baseline">
            { props.event.new === true && props.findEvents === true && (<Badge mr={1} borderRadius="full" px="2" colorScheme="teal">
              New
            </Badge>)}
            { props.event.ownership === true && (<Badge mr={1} borderRadius="full" px="2" colorScheme="green">
              Your Event
            </Badge>)}
            { props.event.spotsRemaining <= 2 && (<Badge mr={1} borderRadius="full" px="2" colorScheme="red">
              Almost Full!
            </Badge>)}
            {props.event.startsToday === true && (<Badge mr={1} borderRadius="full" px="2" colorScheme="yellow">
              Today
            </Badge>)}

          </Box>
        <Box  p="2">
          <Heading fontWeight="semibold" fontSize={'sm'} >FRI APR 8, 8:00 PM</Heading>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
            >
              {props.event.signedUp} signed up &bull;{" "}
              {props.event.spotsRemaining} spots remaining
            </Box>

          <Box
            mt="2"
            fontWeight="semibold"
            fontSize={'xl'}
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {props.event.title}
          </Box>
          <Box fontSize={'md'} mb={2} ml={1} mr={3}  as="h4" lineHeight="tight">
            {props.event.description}
          </Box>
        </Box>
        {props.findEvents ===  true && (<Box display="flex" alignItems="center" justifyContent="flex-end">
          
          <Button onClick={()=>{setShow(false)}} colorScheme="red" m={2} marginBottom="4">
            Swipe Left
          </Button>
          <Button onClick={()=>{setShow(false)}} colorScheme="green" m={2} marginRight="4" marginBottom="4">
            Swipe Right
          </Button>
        </Box>)}
        {props.profileEvents ===  true && (<Box display="flex" alignItems="center" justifyContent="space-between">
          <Button onClick={()=>{}}  colorScheme="teal" m={2} marginBottom="4">
            View Event
          </Button>
          <Button onClick={()=>{setShow(false)}} variant={"outline"} m={2} marginRight="4" marginBottom="4">
            Cancel Event
          </Button>
        </Box>)}
        </Box>
      </Box>)}
    </>
  );
}

export default SportEvent;
