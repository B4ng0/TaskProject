require('./db/connect')
const express = require('express');
const app = express();
const port = 3000
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config()

// midleware
app.use(express.json());

app.get('/hello',(req,res)=>{
	res.send('Task Manager')
});

app.use('/api/v1/tasks',tasks);


const start = async()=>{
	try{
		await connectDB(process.env.MONGO_URI)
		app.listen(3000,console.log(`Ecouter le port ${port}`));
	}catch(err){
		console.error(error);
	}
}
start()