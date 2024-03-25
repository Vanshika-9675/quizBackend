const Topic  = require('../model/topics');

exports.addTopic = async(req,res)=>{
    try {
        const {title , description ,questions} = req.body;

        //check if user already exist
        const topicExist = await Topic.findOne({title});
        if(topicExist){
            console.log("Topic already exists!!");
            return res.status(400).json(
                {
                    sucess:false,
                    message:'topic already exists'
                }
              );
        }

        await Topic.create({
            title,description,questions
        })

        console.log("topic added successfully!!");
        return res.status(200).json({
            success:true,
            message:'topic added successfully',
         })

    } catch (err) {
        console.log(err);
        return res.status(500).json({
          success:false,
          message:'Topic cannot be added , please try again later!'
        })
    }
}

exports.getTopics = async(req,res)=>{
    try {
        // Fetch all topics
        const topics = await Topic.find({});
        return res.status(200).json({
            success: true,
            topics: topics
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'Failed to fetch topics, please try again later!'
        });
    }
}