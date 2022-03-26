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

export default function EventFeed(props) {
  let date = new Date(Date.now())


  const event1 = {
    imageUrl: "https://i.imgur.com/PZ59UV5.png",
    signedUp: 3,
    spotsRemaining: 2,
    title: "Spikeball at Jericho",
    description:
      "Summer is upon us! Let's get out there and play some spike ball people, looking for chill vibes, bring your friends.",
    new: true,
    date: date
  };

  const event2 = {
    imageUrl:
      "https://crs4rec.com/wp-content/uploads/2018/09/moody-park-gallery-014.jpg?x65263",
    signedUp: 6,
    spotsRemaining: 2,
    title: "Basketball at Moody Park",
    description: "Looking for more for a pickup game at the Moody Park courts",
    new: false,
    startsToday: true
  };

  const event3 = {
    imageUrl:
      "https://604now.com/wp-content/uploads/2015/06/english-bay-beach-1280x720.jpg",
    signedUp: 1,
    spotsRemaining: 7,
    title: "Attention beach volleyballers",
    description: "I'll bring the net and balls, you bring the stoke!",
    new: false,
    ownership: true,
  };

  const event4 = {
    imageUrl:
      "https://udisc-parse.s3.amazonaws.com/765a22b7e3e35fe42ce428ebac2ad1d7_m_4tEhdmmTDdf2p6rPXoadoh3zrqrC.jpg",
    signedUp: 1,
    spotsRemaining: 2,
    title: "Disc Golf at Raptor's Knoll",
    description: "Looking for 3 more to fill out the card",
    new: false,
    ownership: false,
  };

  const event5 = {
    imageUrl:
      "https://runvan.org/wp-content/uploads/2020/07/41-2019-BMOVancouverHalfMarathon-115-41-HalfShirts-MayliesLang-RUNVAN%C2%AE.jpg",
    signedUp: 2,
    spotsRemaining: 2,
    title: "Girls running club",
    description: "Looking for some girls to form a weekly running crew in Vancouver",
    new: false,
    ownership: true,
    date: Date.now()
  };



  const { isOpen, onClose, onToggle } = useDisclosure();

  return (
    <>
      <Container maxW="container.md">
        <Box pt={10}>
          <VStack
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            w="full"
            h="full"
            spacing={5}
          >
            {props.findEvents && (<>
              <SportEvent users_eventsData={props.users_eventsData} eventsData={props.eventsData} usersData={props.usersData} findEvents={true} onClose={onClose} event={event1}></SportEvent>
              <SportEvent users_eventsData={props.users_eventsData} eventsData={props.eventsData} usersData={props.usersData} findEvents={true} onClose={onClose} event={event2}></SportEvent>
              <SportEvent users_eventsData={props.users_eventsData} eventsData={props.eventsData} usersData={props.usersData} findEvents={true} onClose={onClose} event={event3}></SportEvent>
            </>)}
            {props.profileEvents && (<>
              <SportEvent users_eventsData={props.users_eventsData} eventsData={props.eventsData} usersData={props.usersData} profileEvents={true} onClose={onClose} event={event4}></SportEvent>
              <SportEvent users_eventsData={props.users_eventsData} eventsData={props.eventsData} usersData={props.usersData} profileEvents={true} onClose={onClose} event={event5}></SportEvent>
              <SportEvent users_eventsData={props.users_eventsData} eventsData={props.eventsData} usersData={props.usersData} profileEvents={true} onClose={onClose} event={event3}></SportEvent>
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
