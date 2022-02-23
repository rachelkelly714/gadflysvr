const db = require('../db'); 
const user = require('./user');
const Philo = require('./philo');
const Post = require('./posts');
const Topics = require('./topics');
const Comments = require('./comments')




// ~~** DB Associations **~~ // 

user.hasMany(Post)
user.hasMany(Topics)
user.hasMany(Comments) 

// Philo.hasmany(Posts)
// Philo.hasmany(Topics)
Philo.hasMany(Comments)

Post.belongsTo(user)
Post.belongsTo(Philo)
Post.hasMany(Comments)

Comments.belongsTo(user)
Comments.belongsTo(Philo)
Comments.belongsTo(Post)


module.exports= {
 user, Philo, Post, Comments
};