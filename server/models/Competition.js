const { Schema, model, Decimal128 } = require('mongoose');

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
  challengedAccept: {
    type: Boolean,
    default: false
  },
  date: {
    type: Date,
    required: true
  },
  victor: {
    type: String
  },
  organizerScore: {
    type: String
  },
  challengedScore:{
    type: String
  },
  category: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true,
    default: "Challenged"
  },
  resultsConfirmed: {
    type: Boolean,
    default: false
  },
});


const Competition = model('Competition', competitionSchema);

module.exports = Competition;
