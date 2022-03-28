import { useState, useEffect } from "react";
import axios from "axios";

const io = require("socket.io-client");
const socket = io();

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

  // useEffect(() => socketInitializer(), [])
  
  const socketInitializer = async () => {
    console.log('socket intializer')
    await fetch('/api/socket');
    socket = io()

    socket.on('connect', () => {
      console.log('connected')
    })

    socket.on('update-input', msg => {
      // setInput(msg)
      console.log(msg)
    })
  }

  // const onChangeHandler = (e) => {
  //   setInput(e.target.value)
  //   socket.emit('input-change', e.target.value)
  // }


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
          console.log('eyy:', response)

        const users_events = {
          ...state.users_events,
          [response.data[0].id]: response.data[0],
        };

        setState({ ...state, users_events })

        console.log(state)
      }); 
  }

  return { state, createEvent, createUserEvent };
}