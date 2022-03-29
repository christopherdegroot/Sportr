import {
  useDisclosure,
  SimpleGrid,
  Box,
  Container,
  VStack,
  Heading,
} from "@chakra-ui/react";
import SportEvent from "./SportEvent";
import styles from "./layout.module.css";
import Link from 'next/link';

import { getEventsForUser, getPotentialEventsForUser } from "../helpers/selectors";

export default function EventFeed(props) {
   const { state, createUserEvent } = props
  const myEvents = getEventsForUser(state, 1) // User ID as seconds arg
  const potentialEvents = getPotentialEventsForUser(state, 1)

  const myEventsReact = myEvents.map(event => (
    <SportEvent state={state} createUserEvent={createUserEvent} key={event.id} onClose={onClose} event={event} profileEvents={true}/>
  ));
  const allEventsReact = potentialEvents.map(event => (
    <SportEvent state={state} createUserEvent={createUserEvent} key={event.id} onClose={onClose} event={event} findEvents={true}/>
  ));

  const { isOpen, onClose, onToggle } = useDisclosure();

  return (
    <>
      <Container maxW="container.md">
        <Box pt={10}>
          <VStack
            flexDirection="column-reverse"
            justifyContent="center"
            alignItems="center"
            w="full"
            h="full"
            spacing={5}
          >
            {props.findEvents && (<>
              {allEventsReact}
            </>)}
            {props.profileEvents && (<>
              {myEventsReact}
            </>)}
          </VStack>
        </Box>
        <Box>
          {!props.home && (
            <Box className={styles.backToHome}>
              <Link  href="/">
                ← Back to home
              </Link>
            </Box>
          )}
        </Box>
      </Container>
    </>
  );
}
