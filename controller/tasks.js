const Task = require('../models/Task')

const getAllTasks = async (req,res) => {
    try {
        const tasks = await Task.find({})
        res.status(200).json({tasks})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

const createNewTask = async (req,res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({task})
    } catch (error) {
        res.status(500).json({msg:error})
    }    
}

const getTask = async (req,res) => {
    try {
        const {id:taskID} = req.params
        const task = await Task.findOne({_id:taskID})
        if(!task) {
            return res.json({msg: 'No task'})
        }
        res.json({task})
    } catch (error) {
        res.status(500).json({msg:error})
    }

}

const updateTask = async (req,res) => {
    try {
        const {id:taskID} = req.params
        // res.json({id:taskID, data:req.body})
        const task = await Task.findOneAndUpdate({_id:taskID}, req.body, {
            new:true,
            runValidators:true
        })
        if(!task) {
            return res.json({msg: 'No task'})
        }
        res.json({task})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

const deleteTask = async (req,res) => {
    try {
        const {id:taskID} = req.params
        const task = await Task.findOneAndDelete({_id:taskID}) 
        if(!task) {
            return res.json({msg: 'No task'})
        }
        res.json({task})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}


module.exports = {
    getAllTasks,
    createNewTask,
    getTask,
    updateTask,
    deleteTask
}