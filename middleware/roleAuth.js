function authUser(req, res, next){
    if (req.user == null){
        res.status(403)
        return res.send('Please sign in, or sign up.')
    }
}

function authRole(role) {

    return(req, res, next) => {
        if (req.user.role !== role) {
        res.status(401).json('Access Denied', error)
        }
        next()
    }
    
    }

module.exports = {
    authUser,
    authRole
}