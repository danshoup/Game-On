const db = require('../config/connection');
const { User, Category, Competition } = require('../models');
const userData = require('./userData.json');
const categoryData = require('./categoryData.json');
const competitionData = require('./competitionData.json');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    {categoryData}
  ]);

  console.log(categories + "seeded");

await Competition.deleteMany();

const competitions = await Competition.insertMany([
  {competitionData}
]);

console.log(competitions + "seeded");

await User.deleteMany();

await User.create({userData});

console.log('users seeded');

process.exit();
});