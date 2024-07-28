const getAllTasks = (req,res)=>{
	res.send('Toutes les Tâches')
}

const createTask = (req,res)=>{
	res.send(req.body)
}

const getTask = (req,res)=>{
	res.json({id: req.params.id})
}

const updateTask = (req,res)=>{
	res.send('Modifier une tâche spécifique')
}

const deleteTask = (req,res)=>{
	res.send('Supprimer une tâche spécifique')
}

module.exports = {
	getAllTasks,
	createTask,
	getTask,
	updateTask,
	deleteTask

}