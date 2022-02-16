require("dotenv").config();

const express = require("express");
const router = express.Router();
const {Comments} = require("../models/comments");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const validateJWT = require("../middleware/validate_jwt");
const {Admin} = require("../models/admin");




// ~~** Post a comment **~~ //

router.post("/create", validateJWT,  async (req, res) => {
    try {
      let { textBox, author, commentId, date,} = req.body.posts;
      await Comments.create({
        textBox,
        author,
        commentId,
        date,
        userId: req.user.id,
      });
  
      res.status(200).json({
        message: "Comment Posted.",
      });
    } catch (error) {
      res.status(500).json({
        message: "Comment not posted.",
      });
    }
  });
  
  
  // ~~** Find User or Philosopher Comment **~~ //
  
  router.get('/my', async (req,res) => {
      try{
          Comments.findAll({
              where: {
                  userId: req.user.id, 
                  userId: req.philo.id,
                  userId: req.admin.id
              }
          }) .then((post) => {
              res.status(200).json(post)
          })
      } catch(error){
          res.status(500).json({
              message: 'Failed to find comments'
          })
      }
  })
  
          // ~~** Find All Posts **~~ // 
  
  
  router.get ("/allposts", validateJWT, async(req, res) => {
      if(req.user.role = 'Socrates' || 'Aristotle')

      try{

          const Comment = await Comments.findAll();
          const CommentRet = Comments.map((a) => {
              

              return {
                
                  textBox: a.textBox,
                  author: a.author,
                  commentId: a.commentId,
                  date: a.date,
              
              };
          });
          res.status(200).json({
              Comment:Comment,
              message: "Found It!"
          }) 


      } 
      
      
      catch(error) {
          res.status(500).json({
              message: 'Comment not found.'
          });

      } else {res.status(401).json({ Message: "Access Denied", err})}
  });
  
  // ~~** Delete Comments - User **~~ //
  
  router.delete("/:id", validateJWT, async (req, res) => {

   const CommentID = req.params.id; 
   const userId = req.user.id; 
   try {
     const query = {
  
     where: {id: CommentID, userId}, 
  
     };
  
     let commentRemoved = await Comments.destroy(query)
  
     if(commentRemoved) {
         res.status(200).json({
             message: "Comment Deleted."
         })
     } else {
         res.status(404).json({
             message: "Comment not found."
         }); 
         console.log(err)
     }
   } catch (error){
       res.status(500).json({
           message: "Error: ISE."
       });
   }
  });
  
  router.put("/update/:id", validateJWT, async(req, res) => {
  try {
      let CommentsID = req.params.id; 
      let{
        textBox,
        author,
        userId,
        date,
      } = req.body.posts;
  
      let query = {
          where: {
              id: CommentsID
          },
      };
      let updatedComments = {
        textBox,
        author,
        userId,
        date,
      } = req.body.posts 
  
      let commentsUpdated = await Comments.update(updatedComments, query);
  
      if (commentsUpdated)
      res.status(200).json({
          message: 'Comment is updated', commentsUpdated
      })
  
  }catch(error) {
      res.status(500).json({
          Message: 'Error: ISE'
      });
  }
  });
  
  
  module.exports = router;