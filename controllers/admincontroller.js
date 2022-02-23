let express = require('express');
let router = express.Router(); 
const {User} = require('../models/user'); 
const {Philo} = require('../models/philo');
const validateJWT = require("../middleware/validate-session")
const {Admin} = require('../models/admin')




router.post("/register",  (req, res) => {
  const admObj = {
    username: req.body.admin.username,
    password: bcrypt.hashSync(req.body.admin.password, 12),
    email: req.body.admin.email,
    role: req.body.admin.role
  };

  admin.create(admObj)
    .then((created) => {
      const token = jwt.sign({ id: created.id }, process.env.JWT_SECRET, {
        expiresIn: "200d"
      });
      res.status(200).json({
        Admin: created,
        Message: "Admin Registered!",
        SessionToken: token,
      });
    })

    .catch((err) => {
      res.status(500).json({Message: "500 ISE", err});
    });
});








//***************** //
// ~~** Login **~~ //
//****************//

router.post("/login", validateJWT, async (req, res) => {
    try {
      const found = await Admin.findOne({
        where: {
          username: req.body.admin.username,
        },
      })
  
      if (!found) {
        res.status(404).json('Admin not found.')
      } else {
        let passwordCompare = await bcrypt.compare(
          req.body.admin.password,
          found.password
        )
        if (passwordCompare) {
          let token= jwt.sign({id: found.id}, process.env.JWT_SECRET, {expiresIn: '30d'})
  
          res.status(200).json({
            Admin: found,
            Message: "Admin logged in",
            SessionToken: token
          });
        } else {
          res.status(401).json({
            Message: "Password is incorrect. Please try again.",
          });
        }
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });






// ~~** Get All Users **~~ //

 router.get('/', async (req, res) => {
    try {
      const all = await User.findAll()
      if (all.length === 0) {
        res.status(404).json({ message: 'No users were found.' })
      } else {
        res.status(200).json(all)
      }
    } catch (err) {
      res.status(500).json({ message: 'Error: 505 ISE', err })
    }
  })
  


// ~~** Get All Philosophers **~~ // 

router.get('/', async (req, res) => {
    try {
      const all = await Philo.findAll()
      if (all.length === 0) {
        res.status(404).json({ message: 'No Philosophers were found.' })
      } else {
        res.status(200).json(all)
      }
    } catch (err) {
      res.status(500).json({ message: 'Error: 505 ISE', err })
    }
  })




 // ~~** Delete User **~~ //

  router.delete('/:id', async (req, res) => {
    const { id } = req.params
    try {
      const result = await User.destroy({ where: { id: id } })
      if (result === 1) {
        res.status(200).json({ message: 'User was deleted'})
      } else {
        res.status(404).json({ message: 'No users were found.' })
      }
    } catch (err) {
      res.status(500).json({ message: 'Error: 500 ISE' , err})
    }
  })


  // ~~** Delete Philo **~~// 

  router.delete('/:id', async (req, res) => {
    const { id } = req.params
    try {
      const result = await Philo.destroy({ where: { id: id } })
      if (result === 1) {
        res.status(200).json({ message: 'Philosopher was deleted'})
      } else {
        res.status(404).json({ message: 'No Philosophers were found.' })
      }
    } catch (err) {
      res.status(500).json({ message: 'Error: 500 ISE' , err})
    }
  })


module.exports= router; 