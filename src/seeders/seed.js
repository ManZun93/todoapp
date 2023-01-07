const db = require('../utils/database');
const Users = require('../models/users.model');
const Todos = require('../models/todos.model')


const users = [
  {
    username: "manuel",
    email: "prueba@gmail.com",
    password: "1234"

  },

  {
    username: "charlie",
    email: "prueba2@gmail.com",
    password: "1234"

  },

  {
    username: "juan",
    email: "prueba3@gmail.com",
    password: "1234"

  }

];

const todos = [
  { title: "tarea 1", description: "descripcion 1", userId: 1 },
  { title: "tarea 2", description: "descripcion 2", userId: 1 },
  { title: "tarea 3", description: "descripcion 3", userId: 2 },
  { title: "tarea 4", userId: 3 }

];

//const categories = [];

//const todosCategories = [];


db.sync({ force: true })
  .then(() => {
    console.log("iniciando ")
    users.forEach((user) => Users.create(user));
    setTimeout(() => {
      todos.forEach((todo) => Todos.create(todo));
    }, 100)
  })
  .catch(error => console.log(error))