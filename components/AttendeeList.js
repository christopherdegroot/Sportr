import { chakra } from "@chakra-ui/react";
import React from "react";

import InterviewerListItem from "./AttendeeListItem";
import {Box, Divider, Text} from "@chakra-ui/react";

// InterviewerList component
function AttendeeList(props) {

  let owner = [
    {
      id: 1,
      name: "Marsha Powell",
      avatar: "https://i.imgur.com/LpaY82x.png",
      bio: "I am Marsha, and I am a lover of volleyball and any event that happens at the beach!",
      owner: true
    }
  ]

  let attendees = [
   {
      id: 2,
      name: "Jamie Pearson",
      avatar: "https://i.imgur.com/Nmx0Qxo.png",
      bio: "I am Jamie, and I love to play Spikeball, tennis, and golf in my free time"
    },
   {
      id: 3,
      name: "Mildred Nazir",
      avatar: "https://i.imgur.com/T2WwVfS.png",
      bio: "I am Mildred, I love playing baseball, tennis and hockey"
    },
  
  ];

  const parsedAttendeeList = attendees.map((attendee) => (
    <InterviewerListItem
      key={attendee.id}
      {...attendee}
      selected={props.value === attendee.id}
    />
  ));

  const ownerList = owner.map((attendee) => (
    <InterviewerListItem
      key={attendee.id}
      {...attendee}
      selected={props.value === attendee.id}
    />
  ));

  return (
    <Box>{ownerList} <Divider height={3} ></Divider> <Text fontWeight={'hairline'} pt={2} fontSize={20}>Attendees:</Text>  {parsedAttendeeList}</Box>
  );
}

export default AttendeeList;
