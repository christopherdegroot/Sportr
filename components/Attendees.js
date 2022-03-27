// test doc for chakra

import { Collapse, Box, Button, VStack, Heading, useDisclosure } from "@chakra-ui/react";
import AttendeeList from "./AttendeeList";

import useApplicationData from "../hooks/useApplicationData";
import { getSignedUpUserCountForEvent } from "../helpers/selectors";

const Attendees = (props) => {

  const { event } = props
  const { state } = useApplicationData()

  const { isOpen, onOpen, onClose, onToggle } = useDisclosure()

  const signedUp = getSignedUpUserCountForEvent(state, event.id)
  const spotsRemaining = event.capacity_limit - signedUp

  return (
    <>
      <Button
        color="gray.500"
        fontWeight="semibold"
        letterSpacing="wide"
        fontSize="xs"
        textTransform="uppercase"
        variant={"link"}
        onClick={onToggle}
      >
        {signedUp} signed up &bull; {spotsRemaining}{" "}
        spots remaining
      </Button>
      <Collapse in={isOpen} animateOpacity>
        <Box
          pl="20px"
          pr="20px"
          py="10px"
          pb="25px"
          color="black"
          mt="4"
          bg="gray.50"
          rounded="md"
          shadow="md"
          mr={2}
          onClick={onToggle}
        >
          <AttendeeList event={event}></AttendeeList>
        </Box>
      </Collapse>
    </>
  );
};

export default Attendees;
