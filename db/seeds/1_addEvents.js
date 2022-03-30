/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

 const { faker } = require('@faker-js/faker');
 
 // Setup faker to use a dutch "theme"
 faker.setLocale('nl');
 
 // Create fake event
 const createFakeEvent = () => {
   const sport = faker.random.arrayElement(['badminton', 'baseball', 'basketball', 'beach volleyball', 'disc golf', 'kayaking', 'curling', 'cycling', 'football', 'golf', 'hiking', 'ice climbing', 'lacrosse', 'pickleball', 'racquetball', 'rock climbing', 'rowing', 'rugby', 'running', 'sailing', 'skiing', 'soccer', 'spike ball', 'squash', 'swimming', 'table tennis', 'tennis', 'trail running', 'ultimate frisbee', 'volleyball', 'yoga']);

   const placeType = faker.random.arrayElement(['Park', 'Beach', 'Mountain', 'Point', 'Street', 'Trail', 'Dog Park', 'School', 'Parking Lot', 'Playground', 'Arena', 'Dike']);

  return {
    user_owner: Math.floor(Math.random() * 10) + 1, 
    title:  `${`${sport.split('')[0].toUpperCase()}${sport.split('').slice(1).join('')}`} at ${faker.address.cityName()} ${placeType}`,
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