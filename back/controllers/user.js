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
    User.findOne(req.body.email)
    .then((user)=>{
      bcrypt.compare(req.body.password,user.password)
      .then(()=>console.log('user trouvé'))
      .catch(() =>res.status(401).console.log('paire email/password incorrecte'))
    })
    .catch((error) => {
      res.status(400).json({
        message: error
      });
    })
};

export default {signup,login};