import bcrypt from 'bcrypt';
import User from '../models/users.js';
import jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
dotenv.config()

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
  const TOKEN = 'shdhg14744gqqzqkk741l6gh4hd4gdrhh14d4d4g5j4j4d4g4ji6i7ddgfgg'
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
            token:jwt.sign(
              {userId:user._id},
              'TOKEN',
              {expiresIn:'24h'}
            )
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