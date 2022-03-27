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
        {'2'} signed up &bull; {'2'}{" "}
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
          <AttendeeList users_eventsData={props.users_eventsData} eventsData={props.eventsData} usersData={props.usersData}></AttendeeList>
        </Box>
      </Collapse>
    </>
  );
};

export default Attendees;
