const { User, Category, Competition } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');

// Need to incorporate User model within query
const resolvers = {
    Query: {
        category: async (parent, { _id }) => {
          const params = _id ? { _id } : {};
          return Category.find(params);
        },
        competition: async (parent, { _id }, context) => {
            const params = _id ? { _id } : {};
            return Competition.find(params).where({$or: [{organizer: context.user.name}, {challenged: context.user.name}]});
        },
        user: async (parent, {username}) => {
          const params = username ? { username } : {};
          return User.find(params);
        },
        wins: async (parent, args, context) => {
          return Competition.find({$or: [{organizer: context.user.name}, {challenged: context.user.name}]}).where("victor").equals(context.user.name).where("resultsConfirmed").equals(true);
        },
        losses: async (parent, args, context) => {
          return Competition.find({$or: [{organizer: context.user.name}, {challenged: context.user.name}]}).where("victor").ne(context.user.name).where("resultsConfirmed").equals(true);
        },
        ties: async (parent, args, context) => {
          return Competition.find({$or: [{organizer: context.user.name}, {challenged: context.user.name}]}).where("victor").equals("draw").where("resultsConfirmed").equals(true);
        },
    },
    Mutation: {
      login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });
  
        if (!user) {
          throw new AuthenticationError('Incorrect credentials');
        }
  
        const correctPw = await user.isCorrectPassword(password);
  
        if (!correctPw) {
          throw new AuthenticationError('Incorrect credentials');
        }
        const token = signToken(user);
        return { token, user };
      },
      addUser: async (parent, { name, email, password, zipCode }) => {
        const user = await User.create({ name, email, password, zipCode });
        const token = signToken(user);
        return { token, user };
      },
      createCompetition: async (parent, args) => {
        const competition = await Competition.create(args);
        return competition;
      },
      updateCompetition: async (parent, args) => {
        const updatedCompetition = await Competition.findByIdAndUpdate(
        args._id,
        { ...args},
        { new: true });
        return updatedCompetition;
      },
      confirmCompetition: async (parent, args) => {
        const confirmedCompetition = await Competition.findByIdAndUpdate(
          args._id,
          {...args},
          { new: true });
        return confirmedCompetition;
      },
      createStats: async (parent, { _id, statValueNum }) => {
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
