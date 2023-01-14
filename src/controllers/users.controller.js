const UserServices = require("../services/user.services");



const getAllUsers = async (req, res) => {
  try {
    //obtener el resultado de consultar todos los users de la base de datos
   const result = await UserServices.getAll();
   res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
}
const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await UserServices.getById(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

const createUser = async (req, res) => {
  try {
    const Newuser = req.body;
    const result = await UserServices.create(Newuser);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const field = req.body;
    const result = await Users.update(field, {
      where: { id }
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
}
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Users.destroy({
      where: { id }
    });
    res.status(200).json(result)
  } catch (error) {
    res.status(400).json(error.message);
  }
}

module.exports =
{
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
}