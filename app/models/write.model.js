var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');

autoIncrement.initialize(mongoose);

var BlogSchema = mongoose.Schema({
  title: String,
  contents: String
}, {
  collection: 'blog'
});

BlogSchema.plugin(autoIncrement.plugin, {
  model: 'Blog',
  field: 'num',
  startAt: 1,
  incrementBy: 1
});

var Blog = mongoose.model('Blog', BlogSchema);