/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

 const { faker } = require('@faker-js/faker');
 
 // Setup faker to use a dutch "theme"
 faker.setLocale('nl');
 
 // Create fake event
 const createFakeEvent = () => {
   const sport = faker.random.arrayElement(['Badminton', 'Baseball', 'Basketball', 'Beach Volleyball', 'Disc Golf', 'Kayaking', 'Curling', 'Cycling', 'Football', 'Golf', 'Hiking', 'Ice Climbing', 'Lacrosse', 'Pickleball', 'Racquetball', 'Rock Climbing', 'Rowing', 'Rugby', 'Running', 'Sailing', 'Skiing', 'Soccer', 'Spike Ball', 'Squash', 'Swimming', 'Table Tennis', 'Tennis', 'Trail Running', 'Ultimate Frisbee', 'Volleyball', 'Yoga']);

   const placeType = faker.random.arrayElement(['Park', 'Beach', 'Mountain', 'Point', 'Street', 'Trail', 'Dog Park', 'School', 'Parking Lot', 'Playground', 'Arena', 'Dike']);

  return {
    user_owner: Math.floor(Math.random() * 10) + 1, 
    title:  `${sport} at ${faker.address.cityName()} ${placeType}`,
    description: faker.lorem.words(15), 
    datetime: faker.date.between('2022-04-01T00:00:00.000Z', '2022-12-31T00:00:00.000Z'), 
    sport: sport,
    capacity_limit: faker.datatype.number({ min: 3, max: 15}),
    latitude: faker.address.latitude(49.006799, 49.377902, 14),
    longitude: faker.address.longitude(-122.121277, -123.280334, 14),
  }
 };
 
 exports.seed = async function(knex) {
   const fakeEvents = [];
   const desiredFakeEvents = 25;
   for (let i = 0; i < desiredFakeEvents; i++) {
     fakeEvents.push(createFakeEvent());
   }
   await knex('events').del().insert(fakeEvents);
 };