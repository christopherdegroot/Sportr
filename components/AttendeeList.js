import { chakra } from "@chakra-ui/react";
import React from "react";

import InterviewerListItem from "./AttendeeListItem";
import {Box, Divider, Text} from "@chakra-ui/react";

import useApplicationData from "../hooks/useApplicationData";
import { getUsersForEvent } from "../helpers/selectors";

// InterviewerList component
function AttendeeList(props) {

  const { state } = useApplicationData()
  const attendees = getUsersForEvent(state, props.event.id)
  console.log('attendees',attendees)

  const ownerid = props.event.user_owner
  const owner = state.users[ownerid]
  console.log(`owner @ ${props.event.title}`, owner)

  const parsedAttendeeList = attendees.map((attendee) => (
    <InterviewerListItem
      key={attendee.id}
      {...attendee}
      selected={props.value === attendee.id}
    />
  ));

  return (
    <Box>
      <InterviewerListItem
      {...owner}
      />
      <Divider height={3} ></Divider> 
      <Text fontWeight={'hairline'} pt={2} fontSize={20}>Attendees:</Text>  
      {parsedAttendeeList}
    </Box>
  );
}

export default AttendeeList;
