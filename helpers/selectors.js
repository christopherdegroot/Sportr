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
  // ++ NEED TO FILTER EVENTS FOR REJECTIONS
  // ++ NEED TO FILTER EVENTS FOR CAPACITY

  // Grab user object for signed in user
  const user = users[0] ? users.find(user => user.id == user_id) : null

  // Grab users preferences if users are present
  const same_gender = users[0] ? user.same_gender_preference : false
  const similar_age = users[0] ? user.similar_age_preference : false

  // returns false when a user should not see an event due to gender prefrences
  const sameGenderCheck = (event) => {

    const eventOwner = users.find(user => user.id == event.user_owner)

    console.log('Gender Bender', eventOwner, user)

    // filter out events that are same gender and you are not the same gender as the event owner
    if (event.same_gender && user.gender !== eventOwner.gender) {
      return false
    }

    // filter out events when a user has not selected
    if (event.same_gender && same_gender == false) {
      return false
    }

    // filter out events that aren't same gender if that is your preference
    if (same_gender && !event.same_gender) {
      return false
    }

    // return true in all other cases
    return true
  }

  // returns false when a user is outside a +/- 5 year age gap
  const similarAgeCheck = (event) => {
    
  }
  

  // Filter out events that don't match a users preferences
  const potentialEvents = users[0] ? events.filter( event => sameGenderCheck(event)) : [] //



  return potentialEvents
}