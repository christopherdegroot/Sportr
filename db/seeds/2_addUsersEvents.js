/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

 const { faker } = require('@faker-js/faker');
 
 // Setup faker to use a dutch "theme"
 faker.setLocale('nl');
 
 // Create fake event
 const createFakeUsersEvents = () => {
  return {
   user_id: Math.floor(Math.random() * 50) + 1,
   event_id: Math.floor(Math.random() * 250) + 1,
  }
 };
 
 exports.seed = async function(knex) {
   const fakeUsersEvents = [];
   const desiredFakeUsersEvents = 250;
   for (let i = 0; i < desiredFakeUsersEvents; i++) {
     fakeUsersEvents.push(createFakeUsersEvents());
   }
   await knex('users_events').del().insert(fakeUsersEvents);
 };