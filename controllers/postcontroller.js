const express = require("express");
const router = express.Router();
const { Posts } = require("../models/posts");




// ~~** Make a post **~~ //

router.post("/create",  async (req, res) => {
  try {
    let { textBox, userId, date, headline } = req.body.posts;
    await Posts.create({
      textBox,
      userId,
      date,
      headline,
      userId: req.user.id,
    });

    res.status(200).json({
      message: "Post Created.",
    });
  } catch (error) {
    res.status(500).json({
      message: "Post not created.",
    });
  }
});


// ~~** Find User or Philosopher Post **~~ //

router.get('/my', async (req,res) => {
    try{
        Posts.findAll({
            where: {
                userId: req.user.id, 
                userId: req.philo.id
            }
        }) .then((post) => {
            res.status(200).json(post)
        })
    } catch(error){
        res.status(500).json({
            message: 'Failed to find post'
        })
    }
})

        // ~~** Find All Posts **~~ // 


router.get ("/allposts", async(req, res) => {
    try{
        const Post = await Posts.findAll();
        const PostRet = Post.map((a) => {
            return {
              
                textBox: a.textBox,
                userId: a.userId,
                date: a.date,
                headline: a.headline,
            };
        });
        res.status(200).json({
            Post:Post,
            message: "Found them!"
        });
    } catch(error) {
        res.status(500).json({
            message: 'Posts not found.'
        });
    }
});

// ~~** Delete Posts - User **~~ //

router.delete("/:id", async (req, res) => {
 const PostID = req.params.id; 
 const userId = req.user.id; 
 try {
   const query = {

   where: {id: PostID, userId},

   };

   let postsRemoved = await Posts.destroy(query)

   if(postsRemoved) {
       res.status(200).json({
           message: "Post Deleted."
       })
   } else {
       res.status(404).json({
           message: "Post not found."
       }); 
       console.log(err)
   }
 } catch (error){
     res.status(500).json({
         message: "Error: Denied."
     });
 }
});

router.put("/update/:id", async(req, res) => {
try {
    let PostsID = req.params.id; 
    let{
      textBox,
      userId,
      date,
      headline,
    } = req.body.posts;

    let query = {
        where: {
            id: PostsID
        },
    };
    let updatedPosts = {
      textBox,
      userId,
      date,
      headline,
    } = req.body.posts 

    let postsUpdated = await Posts.update(updatedPosts, query);

    if (postsUpdated)
    res.status(200).json({
        message: 'Post is updated', postsUpdated
    })

}catch(error) {
    res.status(500).json({
        message: 'Error: ISE'
    });
}
});


module.exports = router;
