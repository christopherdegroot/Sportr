import React from "react";

import InterviewerListItem from "./AttendeeListItem";

let attendees = {
  1: {
    id: 1,
    name: "Sylvia Palmer",
    avatar: "https://i.imgur.com/LpaY82x.png",
  },
  2: {
    id: 2,
    name: "Tori Malcolm",
    avatar: "https://i.imgur.com/Nmx0Qxo.png",
  },
  3: {
    id: 3,
    name: "Mildred Nazir",
    avatar: "https://i.imgur.com/T2WwVfS.png",
  },
  4: {
    id: 4,
    name: "Cohana Roy",
    avatar: "https://i.imgur.com/FK8V841.jpg",
  },
  5: {
    id: 5,
    name: "Sven Jones",
    avatar: "https://i.imgur.com/twYrpay.jpg",
  },
  6: {
    id: 6,
    name: "Susan Reynolds",
    avatar: "https://i.imgur.com/TdOAdde.jpg",
  },
  7: {
    id: 7,
    name: "Alec Quon",
    avatar: "https://i.imgur.com/3tVgsra.jpg",
  },
  8: {
    id: 8,
    name: "Viktor Jain",
    avatar: "https://i.imgur.com/iHq8K8Z.jpg",
  },
  9: {
    id: 9,
    name: "Lindsay Chu",
    avatar: "https://i.imgur.com/nPywAp1.jpg",
  },
  10: {
    id: 10,
    name: "Samantha Stanic",
    avatar: "https://i.imgur.com/okB9WKC.jpg",
  },
};

// InterviewerList component
function AttendeeList(props) {
  console.log(
    "logging attendees object",
    attendees.map((interviewer) =>
      console.log("console log within dawg", interviewer)
    )
  );

  const parsedInterviewerList = attendees.map((interviewer) => (
    <InterviewerListItem
      key={interviewer.id}
      {...interviewer}
      selected={props.value === interviewer.id}
      setInterviewer={() => props.onChange(interviewer.id)}
    />
  ));

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{parsedInterviewerList}</ul>
    </section>
  );
}

export default AttendeeList;
