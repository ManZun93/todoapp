//importar modelos creados
const Users = require ('./users.model');
const Todos = require("./todos.model");
const Categories = require("./categories.model");
const TodosCategories = require("./todos-categories.model")




const initModels = () => {


  //vamos a crear relaciones
  //hasOne uno uno
  // hasMany, tiene muchos
  //belongsTo pertenece a
  Todos.belongsTo(Users, {as: "author", foreignKey: "user_id"});
  Users.hasMany(Todos, { as: "task", foreignKey :"user_id"});

//relacion m-m

TodosCategories.belongsTo(Todos, {as: "task", foreignKey: "todo_id"});
Todos.hasMany(TodosCategories, {as: "category", foreignKey: "todo_id"});

TodosCategories.belongsTo(Categories, {as: "category", foreignKey: "category_id"});
Categories.hasMany(TodosCategories, {as: "task", foreignKey: "category_id"});

}

module.exports =  initModels;