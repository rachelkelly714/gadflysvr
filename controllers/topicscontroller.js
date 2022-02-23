let express = require('express');
let router = express.Router(); 
const { Topics } = require("../models/topics");
const validateJWT = require("../middleware/validate-session")


router.post('/create',   async (req, res) => {
    try {
        let {
            topicBox, topicIds 
        } = req.body.topic

        await Topics.create({
            topicBox,
            topicIds,
            userId: req.user.id
        })
        
        res.status(200).json({
            message: "Topic Created."
        });
    }catch (error) {
        res.status(500).json({
            message: "Topic not added."
        });
    }
}); 

router.get('/my', async (req, res) => {
    try {
        Topics.findAll({
            where: {
            userId: req.user.id,
            
            }
        })
        .then((topic) => {
            res.status(200).json(topic)
        })
    } catch(error){
        res.status(500).json({
            message: "Not found",
        })
    }
})



router.get("/alltopics", async (req, res) => {
    try {
        const Topic = await Topics.findAll();
        const TopicRet = Topic.map((a) => {
            return {
                topicBox: a.topicBox,
                topicsId: a.topicsId
            };
        });
        res.status(200).json({
            Topic: Topic, 
            message: "Got it!"
        });
    } catch(error){
        res.status(500).json({
            message: 'Topic not found.'
        });
    }
});


router.delete("/:id", async (req, res) => {
const TopicID = req.params.id; 
const userID = req.user.id; 



try { 
    const query = {
        where: {id: TopicID, userID},
    }; 

    let topicRemoved = await Topics.destroy(query)

    if (topicRemoved) {
        res.status(200).json({
            message: "Topic Removed",
        })
    } else {
        res.status(404).json({
            message: "Topic Not Found"
        }); console.log(error)
    }

}catch (error) {
    res.status(500).json({
       
    })
}


})

router.put('/update/:id', async(req, res) => {
    try {
        let TopicsID = req.params.id; 
        let {
            topicBox,
            topicsId
        } = req.body.topics;

        let query = {
            where: {
                id: TopicsID
            },
        };

        let updatedTopic = {
            topicBox,
            topicId
        } = req.body.topics

     let topicUpdated = await Topics.update(updatedTopic, query);

     if (topicUpdated)
     res.status(200).json({
         Message: "The Topic has been updated.", topicUpdated
     })



    }catch (error) {
        res.status(500).json({
          message: `Error: ${error}`,
})

    }

})






module.exports= router; 