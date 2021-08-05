const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

User.hasMany(Post, {
    foreignKey: 'user_id',
  });

// Project.belongsTo(User, {
//   foreignKey: 'user_id'
// });

module.exports = { User, Post, Comment };

