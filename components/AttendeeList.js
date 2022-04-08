import React from "react";

import InterviewerListItem from "./AttendeeListItem";
import { Box, Divider, Text } from "@chakra-ui/react";

import { getUsersForEvent } from "../helpers/selectors";

// InterviewerList component
const AttendeeList = (props) => {
  const { state } = props;

  const ownerid = props.event.user_owner;
  const owner = state.users.find((user) => user.id === ownerid); // array not object

  const attendees = getUsersForEvent(state, props.event.id).filter(
    (attendee) => attendee.id !== ownerid
  );

  const parsedAttendeeList = attendees.map((attendee) => (
    <InterviewerListItem
      key={attendee.id}
      {...attendee}
      selected={props.value === attendee.id}
    />
  ));

  return (
    <Box>
      <InterviewerListItem {...owner} />
      <Divider height={3}></Divider>
      <Text fontWeight={"hairline"} pt={2} fontSize={20}>
        Attendees:
      </Text>
      {parsedAttendeeList}
    </Box>
  );
};

export default AttendeeList;
