import bcrypt from 'bcrypt';
import User from '../models/users.js';


const signup = (req, res, next) =>{
    bcrypt.hash(req.body.password,10)
    .then((mdp)=>{
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password : mdp,
          });
        user.save()
        .then(
            () => {
              res.status(201).json({
                message: 'user created'
              });
            }
          ).catch(
            (error) => {
              res.status(400).json({
                error: error
              });
            }
          );
    })
    .catch(error =>res.status(400).json({error}))
};

const login = (req, res, next) =>{
    User.findOne({email:req.body.email})
    .then((user)=>{
      if(!user){
        return res.status(401).json({message:'paire email/password incorrecte'})
      }
      bcrypt.compare(req.body.password,user.password)
      .then((valid)=>{
        if(!valid){
          return res.status(401).json({message:'paire email/password incorrecte'})
        }
        else{
          res.status(201).json({
            userId:user._id,
            userName:user.name,
            token:'TOKEN'
          })
        }
      })
      .catch((error) =>res.status(500).json({error}))
    })
    .catch((error) => {
      res.status(500).json({
        message: error
      });
    })
};

export default {signup,login};