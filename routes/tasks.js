const express = require('express');
const router = express.Router()
const { getAllTasks,
    createNewTask,
    getTask,
    updateTask,
    deleteTask} = require('../controller/tasks')

router.get('/', getAllTasks)
router.post('/', createNewTask)
router.get('/:id', getTask)
router.patch('/:id', updateTask)
router.delete('/:id', deleteTask)

module.exports = router