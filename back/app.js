import  express  from "express";
import mongoose from 'mongoose';
import Post from './models/posts.js'

mongoose.connect('mongodb+srv://toto:6I1CKlAs1HI9akuv@clone.xrknh2m.mongodb.net/test',
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

export default app;