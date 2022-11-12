import mongoose from 'mongoose';

const urlDB= process.env.REACT_APP_URL_DB;

const User = new mongoose.Model('User', {
    name: String,
    age: Number
})

const SendToDb = async () =>{
    await mongoose.connect(urlDB)
    await user1.save().then(console.log('inseré'))

}

const user1 = new User({
    name:'nicolas',
    age:40
})
SendToDb();