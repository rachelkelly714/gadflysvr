function authRole(role) {

return(req, res, next) => {
    if (req.user.role !== role) {
    res.status(401).json('Access Denied', error)
    }
    next()
}

}