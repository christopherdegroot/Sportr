// test doc for chakra

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
  CheckIcon,
  ButtonGroup,
  IconButton,
  EmailIcon,
  Text,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
  AlertDialogCloseButton,
  Collapse,
} from "@chakra-ui/react";
import React from "react";

const CancelButtonSportEvent = (props) => {
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();
  const cancelRef = React.useRef();
  const [show, setShow] = React.useState(true);

  return (
    <>
      <Button
        onClick={onOpen}
        variant={"outline"}
        m={2}
        marginRight="4"
        marginBottom="4"
      >
        Cancel
      </Button>
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
        w="80%"
      >
        <AlertDialogOverlay />

        <AlertDialogContent w="80%">
          <AlertDialogHeader>Discard Event?</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            Are you sure you want to delete this event?
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button
              colorScheme="red"
              onClick={() => {
                setShow(false);
              }}
            >
              Yes
            </Button>
            <Button ml={3} ref={cancelRef} onClick={onClose}>
              No
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default CancelButtonSportEvent;
