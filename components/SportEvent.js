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
  console.log('props onclose', props.findEvents)
  const [show, setShow] = React.useState(true)
  return (
    <>
     {show && (<Box
        _hover={{ boxShadow: "xl" }}
        p="6"
        rounded="md"
        bg="white"
        borderWidth="2px"
        borderRadius="lg"
        overflow="hidden"
      >
        <Image src={props.event.imageUrl} />

        <Box  p="6">
          <Box display="flex" alignItems="baseline">
            { props.event.new === true && props.findEvents === true && (<Badge mr={1} borderRadius="full" px="2" colorScheme="teal">
              New
            </Badge>)}
            { props.event.spotsRemaining <= 2 && (<Badge mr={1} borderRadius="full" px="2" colorScheme="green">
              Your Event
            </Badge>)}
            {props.profileEvents ===  true && (<Badge mr={1} borderRadius="full" px="2" colorScheme="yellow">
              Starts today
            </Badge>)}

            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              {props.event.signedUp} signed up &bull;{" "}
              {props.event.spotsRemaining} spots remaining
            </Box>
          </Box>

          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {props.event.title}
          </Box>
          <Box mt="1" as="h4" lineHeight="tight">
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
        {props.profileEvents ===  true && (<Box display="flex" alignItems="center" justifyContent="flex-end">
          <Button onClick={()=>{}}  colorScheme="teal" m={2} marginBottom="4">
            View Event
          </Button>
          <Button onClick={()=>{setShow(false)}} variant={"outline"} m={2} marginRight="4" marginBottom="4">
            Cancel Event
          </Button>
        </Box>)}

      </Box>)}
    </>
  );
}

export default SportEvent;
