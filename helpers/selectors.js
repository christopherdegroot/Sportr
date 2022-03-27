export function getEventsForUser(state, user_id) {
  const { events, users, users_events } = state;

  // Get all users_events pertaining to the user_id
  const eventRelations = users_events.filter(relationObj => relationObj.user_id === user_id);

  // Grab all the event ids from those user events
  const eventIds = eventRelations.map(relationObj => relationObj.event_id);

  // Grab all events that match event ids in eventIds
  const usersEvents = events.filter(event => eventIds.includes(event.id))

  return usersEvents
}