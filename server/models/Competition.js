const { Schema, model } = require('mongoose');

const competitionSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 60,
    trim: true,
  },
  location: {
    type: String,
    required: true
  },
  organizer: {
    type: String,
    required: true
  },
  challenged: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  victor: {
    type: String
  },
  organizerScore: {
    type: Decimal128
  },
  challengedScore:{
    type: Decimal128
  },
  category: {
    type: String,
    required: true
  },
  stats: [
    {
      statName: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 30
      },
      statValue: {
        type: Decimal128
      }
    },
  ],
});


const competition = model('Competition', competitionSchema);

module.exports = Competition;
