/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

 const { faker } = require('@faker-js/faker');
 
 // Setup faker to use a dutch "theme"
 faker.setLocale('nl');
 
 // Create fake event
 const createFakeEvent = () => {
  return {
   user_owner: Math.floor(Math.random() * 50) + 1,
   title: faker.lorem.words(2),
   description: faker.lorem.words(20),
  }
 };
 
 exports.seed = async function(knex) {
   const fakeEvents = [];
   const desiredFakeEvents = 250;
   for (let i = 0; i < desiredFakeEvents; i++) {
     fakeEvents.push(createFakeEvent());
   }
   await knex('events').del().insert(fakeEvents);
 };