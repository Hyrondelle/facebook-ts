import mongoose from 'mongoose';



const User = new mongoose.Model('User', {
    name:String,
    email:String
    
})
export default User;