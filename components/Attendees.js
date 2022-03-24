// test doc for chakra

import { Collapse, Box, Button, VStack, Heading, useDisclosure } from "@chakra-ui/react";
import AttendeeList from "./AttendeeList";

const Attendees = (props) => {
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure()
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
        {props.event.signedUp} signed up &bull; {props.event.spotsRemaining}{" "}
        spots remaining
      </Button>
      <Collapse in={isOpen} animateOpacity>
        <Box
          p="40px"
          color="black"
          mt="4"
          bg="gray.100"
          rounded="md"
          shadow="md"
          mr={2}
        >
          Chris De Groot
          Noah Vandenberg
        </Box>
      </Collapse>
    </>
  );
};

export default Attendees;
