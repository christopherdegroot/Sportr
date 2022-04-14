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
import Link from "next/link";

import { getEventsForUser } from "../helpers/selectors";

export default function EventFeed(props) {

  const myEvents = getEventsForUser(state, props.user_id);

  const myEventsReact = myEvents.map((event) => (
    <SportEvent key={event.id} onClose={onClose} event={event} />
  ));

  const { isOpen, onClose, onToggle } = useDisclosure();
  return (
    <>
      <Container maxW="container.md">
        <Box rounded="md" borderWidth="1px" borderRadius="lg" overflow="hidden">
          <VStack
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            w="full"
            h="full"
            p={10}
            spacing={10}
          >
            <SportEvent onClose={onClose} event={event1}></SportEvent>

            <SportEvent onClose={onClose} event={event2}></SportEvent>

            <SportEvent onClose={onClose} event={event3}></SportEvent>

            {/* {myEventsReact} */}
          </VStack>
        </Box>
      </Container>
    </>
  );
}
