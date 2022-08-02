//this file is for function only called controlles

// importing mongoose and using the schema that we created in models folder
import mongoose from "mongoose"
import Story from "../models/storyContent.js"

//this function is to dispaly all the stories that are stored in database and send them to the client 
const getStories = async (req,res) =>{
    try{
        const story = await Story.find()
        res.status(200).json(story)
    }catch(error){
        res.status(404).json({message : error.message})
    }
}

// this function is for creating the stories 
const createStory = async (req,res)=>{
    // get the data from the form in the client 
    const body = req.body
    // create a new story on the serveur
    const newStroy = new Story({
        ...body
    })
    //save the new stroy on the database using .save() function
    try{
        await newStroy.save()
        res.status(201).json(newStroy)
    }catch(error){
        res.status(409).json({message : error.message})
    }
}
export {getStories , createStory}