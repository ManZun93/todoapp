//primero importar express

const express =  require('express');
const db = require("./utils/database");
const initModels = require('./models/init.models');
const Users = require('./models/users.model');
const Todos = require('./models/todos.model');

//crear instancia de express

const app = express();

app.use(express.json())


const PORT = 8000;

//probando la conexion a la base
db.authenticate()
.then(()=> console.log('autenticacion exitosa'))
.catch((error) => console.log(error));

initModels();
//vamos a usar el metodo sync de la base de datos

db.sync({force: false})//devuelve una promesa
.then(()=> console.log("base de datos sincronizada"))
.catch((error)=> console.log(error));

app.get('/', (req, res) => {
  res.status(200).json({message : "Bienvenido al servidor"})
});

//definir rutas de los endpoints ep

//para todas las consultas de usuarios 
//localhost:8000/users 
//localhost:8000/todos

//GET a /users

app.get('/users', async (req, res)=> {
  try {
    //obtener el resultado de consultar todos los users de la base de datos
    const result = await Users.findAll();
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
});
//obtener usuario por ID

app.get('/users/:id', async (req, res)=> {
 try {
  const {id} = req.params;
  const result = await Users.findByPk(id);
  res.status(200).json(result);
 } catch (error) {
  console.log(error);
 }
});

//obtener por username

app.get("/users/username/:username", async (req, res)=> {
  try {
    const {username} = req.params;
    const result = await Users.findOne({where :{username}});
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
});

//creando usuario

app.post('/users', async (req, res)=>{
  try {
    const user = req.body;
    const result = await Users.create(user);
    res.status(201).json(result);
  } catch (error) {
    console.log(error);
  }
});

//actualizar usuario cambiando solo password

app.put('/users/:id', async (req, res)=> {
  try {
    const {id} = req.params;
    const field = req.body;
    const result = await Users.update(field, {
      where :{id}
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

//eliminar usuario id

app.delete('/users/:id', async (req, res)=> {
  try {
    const {id} = req.params;
    const result = await Users.destroy({
      where: {id}
    });
    res.status(200).json(result)
  } catch (error) {
    res.status(400).json(error.message);
  }
})


//obtener todas las tareas 
app.get('/todos', async (req, res)=> {
  try {
    //obtener el resultado de consultar todos los users de la base de datos
    const result = await Todos.findAll();
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
});

//obtener tarea por id

app.get('/todos/:id', async (req, res)=> {
  try {
   const {id} = req.params;
   const result = await Todos.findByPk(id);
   res.status(200).json(result);
  } catch (error) {
   console.log(error);
  }
 });

//creando tarea
 app.post('/todos', async (req, res)=>{
  try {
    const todo = req.body;
    const result = await Todos.create(todo);
    res.status(201).json(result);
  } catch (error) {
    console.log(error);
  }
});

//actualizando tarea

app.put('/todos/:id', async (req, res)=> {
  try {
    const {id} = req.params;
    const field = req.body;
    const result = await Todos.update(field, {
      where :{id}
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

//Eliminar tarea 
app.delete('/todos/:id', async (req, res)=> {
  try {
    const {id} = req.params;
    const result = await Todos.destroy({
      where: {id}
    });
    res.status(200).json(result)
  } catch (error) {
    res.status(400).json(error.message);
  }
})

app.listen(PORT, () => {
  console.log(`Servidor corriendo en ${PORT}`);
});



