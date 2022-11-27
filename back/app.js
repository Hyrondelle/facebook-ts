import  express  from "express";
import mongoose from 'mongoose';
import PostRoutes from './routes/posts.js';
import authRoutes from './routes/users';
import * as dotenv from 'dotenv';
dotenv.config()

const mdp = process.env.MDP

mongoose.connect('mongodb+srv://toto:'+mdp+'@clone.xrknh2m.mongodb.net/test',
  { useNewUrlParser: true,
   useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();
app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

  app.use('/', PostRoutes);
  app.use('/', authRoutes);

export default app;