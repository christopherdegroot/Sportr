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

export function getUsersForEvent(state, event_id) {
  const { events, users, users_events } = state;

  // Get all users_events pertaining to the event_id
  const eventRelations = users_events.filter(relationObj => relationObj.event_id === event_id);

  // Grab all the event ids from those user events
  const userIds = eventRelations.map(relationObj => relationObj.user_id);

  // Grab all events that match event ids in eventIds
  const eventsUsers = users.filter(user => userIds.includes(user.id))

  return eventsUsers
}

export function getSignedUpUserCountForEvent(state, event_id) {
  const { events, users, users_events } = state;

  // Get all users_events pertaining to the event_id
  const eventRelations = users_events.filter(relationObj => relationObj.event_id === event_id);

  // Grab all the event ids from those user events
  const userIds = eventRelations.map(relationObj => relationObj.user_id);

  // Grab all events that match event ids in eventIds
  const eventsUsers = users.filter(user => userIds.includes(user.id))

  const count = eventsUsers.length

  return count
}

export function getPotentialEventsForUser(state, user_id) {
  const { events, users, users_events } = state;

  // ++ NEED TO ADD RANGE PREFERENCE
  // ++ NEED TO SAME GENDER FOR CREATORS GENDER

  // Grab user object for signed in user
  const user = users[0] ? users.find(user => user.id == user_id) : null

  // Grab users preferences if users are present
  const same_gender = users[0] ? user.same_gender_preference : false
  const similar_age = users[0] ? user.similar_age_preference : false

  

  // Filter out events that don't match a users preferences
  const potentialEvents = users[0] && events[0] ? events.filter((event) =>

    // If a user user and an events same gender preference both are true and their gender are the same they event's that aren't that are filtered out
    event.same_gender == same_gender && same_gender ? users[event.user_owner - 1].gender == users[user_id].gender : true 
    // event.similar_age == similar_age ? users : null 
   ) : []


  return potentialEvents
}