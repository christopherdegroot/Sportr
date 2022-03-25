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
  Collapse
} from "@chakra-ui/react";
import React from "react";
import { HiChevronDoubleDown } from "react-icons/hi";
import { BsCalendarEvent, BsFillCalendarPlusFill, BsFillCalendarDayFill } from 'react-icons/bs'
import ImageSliderCustom from './carousel/ImageSlider'
import { SlideData } from "./carousel/SlideData";
import Attendees from "./Attendees";

function SportEvent(props) {
  const [show, setShow] = React.useState(true);
  const { isOpenCancel, isOpen, onOpen, onClose, onToggle } = useDisclosure()
  const cancelRef = React.useRef()
  let showAttendees = false;
  const showAttendeesFunction = function (tf) {
    showAttendees = tf
  }

  return (
    <>
      {show && (
        <Box
          _hover={{ boxShadow: "xl" }}
          rounded="md"
          bg="white"
          borderWidth="2px"
          borderRadius="lg"
          overflow="hidden"
        >
          <ImageSliderCustom slides={SlideData} />
          <Box pt='3' pl="2">
            <Box pl="1" display="flex" alignItems="baseline">
              {props.event.new === true && props.findEvents === true && (
                <Badge mr={1} borderRadius="full" px="2" colorScheme="teal">
                  New
                </Badge>
              )}
              {props.event.ownership === true && (
                <Badge mr={1} borderRadius="full" px="2" colorScheme="green">
                  Your Event
                </Badge>
              )}
              {props.event.spotsRemaining <= 2 && (
                <Badge mr={1} borderRadius="full" px="2" colorScheme="red">
                  Almost Full
                </Badge>
              )}
              {props.event.startsToday === true && (
                <Badge mr={1} borderRadius="full" px="2" colorScheme="yellow">
                  Today
                </Badge>
              )}
            </Box>
            <Box p="2">
              <Heading fontWeight="semibold" fontSize={"sm"}>
              {props.event.date && Date.parse(props.event.date)}
              {!props.event.date && "FRI APR 8, 8:00 PM"}
              </Heading>
              <Attendees event={props.event}></Attendees>
              <Box
                mt="2"
                fontWeight="semibold"
                fontSize={"xl"}
                as="h4"
                lineHeight="tight"
                isTruncated
              >
                {props.event.title}
              </Box>
              <Box
                fontSize={"md"}
                mb={2}
                ml={1}
                mr={3}
                as="h4"
                lineHeight="tight"
              >
                {props.event.description}
              </Box>
              <VStack flexDirection={"row"} justifyContent={"flex-start"}>
              
              </VStack>
            </Box>
            {props.findEvents === true && (
              <Box display="flex" alignItems="center" justifyContent="flex-end">
                <Button
                  onClick={() => {
                    setShow(false);
                  }}
                  colorScheme="red"
                  m={2}
                  marginBottom="4"
                >
                  Reject
                </Button>
                <Button
                  onClick={() => {
                    setShow(false);
                  }}
                  colorScheme="green"
                  m={2}
                  marginRight="4"
                  marginBottom="4"
                >
                  Accept
                </Button>
              </Box>
            )}

            {props.profileEvents === true && (
              <Box display="flex" alignItems="center" justifyContent="flex-end">
               
                <Button
                  onClick={onOpen}
                  variant={"solid"}
                  colorScheme="teal"
                  m={2}
                  marginRight="4"
                  marginBottom="4"
                >
                  Cancel
                </Button>
                <AlertDialog
                  motionPreset='slideInBottom'
                  leastDestructiveRef={cancelRef}
                  onClose={onClose}
                  isOpen={isOpen}
                  isCentered
                  w='80%'
                >
                  <AlertDialogOverlay />

                  <AlertDialogContent w='80%'>
                    <AlertDialogHeader>Discard Event?</AlertDialogHeader>
                    <AlertDialogCloseButton />
                    <AlertDialogBody>
                      Are you sure you want to delete this event?
                    </AlertDialogBody>
                    <AlertDialogFooter>
                      <Button colorScheme='red'   onClick={() => {
                    setShow(false);
                  }}>
                        Yes
                      </Button>
                      <Button ml={3} ref={cancelRef} onClick={onClose}>
                        No
                      </Button>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </Box>
            )}
          </Box>
        </Box>
      )}
    </>
  );
}

export default SportEvent;
