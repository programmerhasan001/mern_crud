const TaskModel = require('../models/TaskModel');

module.exports.getTasks = async (req, res) => {
    const tasks = await TaskModel.find()
    res.send(tasks)
}