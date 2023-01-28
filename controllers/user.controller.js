const users= require('../models/user.models')
const validateUser= require('../validation/user.validation')

const addUser = async (req,res)=>{
    const { errors,isValid }= validateUser(req.body)
    try {
        if (!isValid) {
          res.status(404).json(errors);
        } else {
          await users.findOne({ email: req.body.email }).then(async (exist) => {
            if (exist) {
              errors.email = "User Exist";
              res.status(404).json(errors);
            } else {
              await users.create(req.body);
              res.status(201).json({ message: "User added with success" });
            }
          });
        }
      } catch (error) {
        console.log(error.message);
      }
}

const findAllUsers = async (req,res)=>{
    try{
        const data= await users.find()
        res.status(201).json(data)
    }catch{
        console.log("error")
    }
}

const findSingleUser = async (req,res)=>{
    try{
        const data= await users.findOne({_id: req.params.id})
        res.status(201).json(data)
    }catch{
        console.log(error.message)
    }
}

const updateUser = async (req,res)=>{
    const { errors, isValid } = validateUser(req.body);
    try {
      if (!isValid) {
        res.status(404).json(errors);
      } else {
        const data = await users.findOneAndUpdate(
          { _id: req.params.id },
          req.body,
          { new: true }
        );
        res.status(201).json(data);
      }
    } catch (error) {
      console.log(error.message);
    }
}
const DeleteUser = async (req,res)=>{
    try{
        const data= await users.findOneAndRemove({_id: req.params.id})
        res.status(201).json({message:"user deleted with success"})
    }catch{
        console.log(error.message)
    }
}
module.exports= {
    addUser,
    findAllUsers,
    findSingleUser,
    updateUser,
    DeleteUser
}