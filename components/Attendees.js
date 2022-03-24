// test doc for chakra

import { Collapse, Box, Button, VStack, Heading, useDisclosure } from "@chakra-ui/react";

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
          color="white"
          mt="4"
          bg="teal.500"
          opacity={"40%"}
          rounded="md"
          shadow="md"
          mr={2}
        >
          Hello
        </Box>
      </Collapse>
    </>
  );
};

export default Attendees;
