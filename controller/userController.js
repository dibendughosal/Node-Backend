const User = require('../model/userModel.js')

exports.home = (req,res)=> {
    res.send('<h2>Hey User!, I Hope You are doing well.</h2>')
}

exports.createUser = async(req, res) =>{
    try {
        const { name, email } = req.body;

        // console.log(req.body);

        if(!name || !email){
            return res.status(400).json({message: "Name and emails are required"})
        }
    
        const userExists = await User.findOne({email})
        if(userExists){
            throw new Error("User already exists...")
        }
        const user = await User.create({
            name,
            email
        })
        res.status(200).json({
            success: true,
            message: "User Created Successfully",
            user
        })

    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: error.message,
        })
    }
}

exports.getUser = async(req, res) =>{
    try {
        const users = await User.find({})
        res.status(200).json({
            success: true,
            message: "Successfully get",
            users
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: error.message,
        })
    }
}

exports.deleteUser = async(req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.findByIdAndDelete(userId);
        res.status(200).json({
            success: true,
            message: "User Deleted Successfully"
        })
        
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: "Deleted Failed",
        })
    }
}

exports.editUser = async(req, res) => {
    try {
        const userId = req.params.id;
        const editUser = await User.findByIdAndUpdate(userId, req.body);
        res.status(200).json({
            success: true,
            message: "User updated successfully."
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: "Deleted Failed",
        })
    }
}