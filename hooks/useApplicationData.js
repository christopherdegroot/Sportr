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
      .put(URL, { event })
      .then(() => {
        setState({ ...state })
      });
  }

  return { state, createEvent};
}