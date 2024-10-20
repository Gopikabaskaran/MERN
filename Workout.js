const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
  type: { type: String, required: true },
  duration: { type: Number, required: true },
  calories: { type: Number, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

const Workout = mongoose.model('Workout', workoutSchema);
module.exports = Workout;
