import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {
  // Set Default State
  const [state, setState] = useState({
    users: [],
    events: [],
    users_events: [],
  });

  // Get data from api
  useEffect(() => {
    Promise.all([
      axios.get('/api/v1/users'),
      axios.get('/api/v1/events'),
      axios.get('/api/v1/users_events')
    ]).then((all) => {
      const [users, events, users_events] = all;
      setState((prev) => ({
        ...prev,
        users: users.data,
        events: events.data,
        users_events: users_events.data
      }));
    })
  }, [])

  // draft create user
  function createEvent(user_id, event) {

    const URL = `/api/v1/events`;

    return axios
      .post(URL, event)
      .then((response) => {

        const events = {
          ...state.events,
          [response.data[0].id]: response.data[0],
        };

        setState({ ...state, events })
      }); 
  }

  function createUserEvent(event_id, user_id, value) {
    const URL = `/api/v1/users_events`;

    return axios
      .post(URL, {event_id: event_id, user_id: user_id, value: value})
      .then((response) => {

        const users_events = {
          ...state.users_events,
          [response.data[0].id]: response.data[0],
        };

        setState({ ...state, users_events })

        console.log(state)
      }); 
  }

  function changeUserEvent(event_id, user_id, value) {

    const { users, events, users_events } = state;

    const record = users_events.find(user_event => user_event.event_id === event_id && user_event.user_id === user_id);


    const URL = `/api/v1/users_events/${record.id}`;

    return axios
      .put(URL, {event_id: event_id, user_id: user_id, value: value})
      .then((response) => {

        const users_events = {
          ...state.users_events,
          [response.data[0].id]: response.data[0],
        };

        setState({ ...state, users_events })

        console.log(state)
      }); 
  }


  return { state, createEvent, createUserEvent, changeUserEvent };
}