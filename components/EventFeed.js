import {
  useDisclosure,
  SimpleGrid,
  Box,
  Container,
  VStack,
  Heading,
  Stack,
  Button
} from "@chakra-ui/react";
import SportEvent from "./SportEvent";
import styles from "./layout.module.css";
import Link from 'next/link';

import { getEventsForUser, getPotentialEventsForUser } from "../helpers/selectors";


export default function EventFeed(props) {
   const { state, createUserEvent, changeUserEvent } = props
  const myEvents = getEventsForUser(state, props.user_id) // User ID as seconds arg
  const potentialEvents = getPotentialEventsForUser(state, props.user_id)

  const myEventsReact = myEvents.map(event => (
    <Box py={2}>
      <SportEvent state={state} createUserEvent={createUserEvent} changeUserEvent={changeUserEvent} key={event.id} onClose={onClose} event={event} profileEvents={true}/>
    </Box>
  ));
  const allEventsReact = potentialEvents.map(event => (
    <Box py={2}>
      <SportEvent state={state} createUserEvent={createUserEvent} changeUserEven={changeUserEvent} key={event.id} onClose={onClose} event={event} findEvents={true}/>
    </Box>
  ));

  const { isOpen, onClose, onToggle } = useDisclosure();

  return (
    <>
      <Container maxW="container.md">
        <Box px={2} pt={5}>
          <VStack
            flexDir={'column-reverse'}
          >
            {props.findEvents && (<>
              {allEventsReact}
            </>)}
            {props.profileEvents && (<>
              {myEventsReact}
            </>)}
          </VStack>
        </Box>
        
      </Container>
    </>
  );
}
