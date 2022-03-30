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
import ImageSlider from './carousel/ImageSlider'
import Attendees from "./Attendees";
import { getFormattedDateTime, isToday } from "../helpers/formatters";
import { getSignedUpUserCountForEvent } from "../helpers/selectors";
import { SlideData } from "./carousel/SlideData";


function SportEvent(props) {
  const [show, setShow] = React.useState(true);
  const { isOpenCancel, isOpen, onOpen, onClose, onToggle } = useDisclosure()
  const cancelRef = React.useRef()
  let showAttendees = false;
  const showAttendeesFunction = function (tf) {
    showAttendees = tf
  }
  const { state, createUserEvent, changeUserEvent } = props
  
  const signedUp = getSignedUpUserCountForEvent(state, props.event.id)
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
          <ImageSlider key={props.event.id} data={SlideData} sport={props.event.sport} />
          <Box pt='3' pl="2">
          <Box pl="1" display="flex" alignItems="baseline">
              {props.event.new === true && props.findEvents === true && (
                <Badge mr={1} borderRadius="full" px="2" colorScheme="teal">
                  New
                </Badge>
              )}
              {props.event.user_owner === props.state.users[0].id && (
                <Badge mr={1} borderRadius="full" px="2" colorScheme="green">
                  Your Event
                </Badge>
              )}
              {(props.event.capacity_limit - signedUp) <= 2 && (
                <Badge mr={1} borderRadius="full" px="2" colorScheme="red">
                  Almost Full
                </Badge>
              )}
              {isToday(props.event.datetime) === true && (
                <Badge mr={1} borderRadius="full" px="2" colorScheme="yellow">
                  Today
                </Badge>
              )}
              </Box>
              <Box pt='1' pl="1">
              {props.event.similar_age === true && (
                <Badge mr={1} borderRadius="full" px="2" colorScheme="blue">
                  Age Restricted
                </Badge>
              )}
              {props.event.same_gender === true && (
                <Badge mr={1} borderRadius="full" px="2" colorScheme="orange">
                  Gender Restricted
                </Badge>
              )}
            </Box>
            <Box p="2">
              <Heading fontWeight="semibold" fontSize={"sm"}>
              {getFormattedDateTime(props.event.datetime)}
              </Heading>
              <Attendees state={state} event={props.event}></Attendees>
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
                    console.log('REJECTION')
                    createUserEvent(props.event.id, Number(props.user_id), false); // Set 1 to logged in user value
                    setShow(false);
                  }}
                  variant={'outline'}
                  colorScheme="red"
                  m={2}
                  marginBottom="4"
                >
                  Decline
                </Button>
                <Button
                  onClick={() => {
                    console.log('ACCEPTION')
                    createUserEvent(props.event.id, Number(props.user_id), true); // Set 1 to logged in user value
                    setShow(false);
                  }}
                  variant={'outline'}
                  colorScheme="teal"
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
                    changeUserEvent(props.event.id, Number(props.user_id), false); // Set 1 to logged in user value
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
