const getAllTasks = (req,res)=>{
	res.send('Toutes les T�ches')
}

const createTask = (req,res)=>{
	res.send(req.body)
}

const getTask = (req,res)=>{
	res.json({id: req.params.id})
}

const updateTask = (req,res)=>{
	res.send('Modifier une t�che sp�cifique')
}

const deleteTask = (req,res)=>{
	res.send('Supprimer une t�che sp�cifique')
}

module.exports = {
	getAllTasks,
	createTask,
	getTask,
	updateTask,
	deleteTask

}