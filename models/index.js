const db = require('../db'); 
const User = require('./user');
const Philo = require('./philo');
const Posts = require('./posts');
const Topics = require('./topics');
const Comments = require('./comments')




// ~~** DB Associations **~~ // 

User.hasMany(Posts)
User.hasMany(Topics)
User.hasMany(Comments) 

Philo.hasmany(Posts)
Philo.hasmany(Topics)
Philo.hasMany(Comments)

Posts.belongsTo(User)
Posts.belongsTo(Philo)

Comments.belongsTo(User)
Comments.belongsTo(Philo)


module.exports= {
    User, Philo, Posts, Comments,
}