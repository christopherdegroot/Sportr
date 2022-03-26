/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

const { faker } = require('@faker-js/faker');
const e = require("express");

// Setup faker to use a dutch "theme"
faker.setLocale('nl');

// Create a user object
const createFakeUser = () => {
  const first_name = faker.name.firstName();
  const last_name = faker.name.lastName();
  const name = `${first_name} ${last_name}`;
  const email = faker.internet.email(first_name,last_name);
  const bio = faker.hacker.phrase()
  const birth_date = faker.date.between('1970-01-01T00:00:00.000Z', '2005-01-01T00:00:00.000Z')
  const gender = faker.random.arrayElement(['male','female'])
  const profile_image_url = faker.image.avatar()
  return {
    email: email,
    name: name,
    // Passwords are being stored as a string for early development
    password: 'password',
    bio: bio,
    birth_date: birth_date,
    gender: gender,
    profile_image_url: profile_image_url
  };
}

exports.seed = async function(knex) {
  const fakeUsers = [];
  const desiredFakeUsers = 10;
  for (let i = 0; i < desiredFakeUsers; i++) {
    fakeUsers.push(createFakeUser());
  }
  await knex('users').del().insert(fakeUsers);
};