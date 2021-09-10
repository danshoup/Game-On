const { User, Category, Competition } = require('../models');

// Need to incorporate User model within query
const resolvers = {
    Query: {
        Category: async () => {
          return Category.find({});
        },
        Competition: async (parent, { _id }) => {
            const params = _id ? { _id } : {};
            return Competition.find(params);
      },
    },
    Mutation: {
      createCompetition: async (parent, args) => {
        const competition = await Competition.create(args);
        return competition;
      },
      createScore: async (parent, { _id, statValueNum }) => {
        const score = await Competition.findOneAndUpdate(
          { _id },
          { $inc: { [`user${statValueNum}_score`]: 1 } },
          { new: true }
        );
        return score;
      },
    },
  
};

module.exports = resolvers;
