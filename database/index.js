const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/mvp', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('database is running')
});

const reportSchema = new Schema ({
  id: Number,
  beach: String,
  beachImg: String,
  city: String,
  surf: String,
  report: String,
  tide: String,
  wind: String,
  swell: String,
  water: String,
  weather: String,
  suit: Array,
  livestream: String,
  compass: String
})

const Report = mongoose.model('Report', reportSchema)

module.exports = Report;