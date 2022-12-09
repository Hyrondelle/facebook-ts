import jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
dotenv.config()
 
const auth = (req, res, next) => {
    const TOKEN = 'shdhg14744gqqzqkk741l6gh4hd4gdrhh14d4d4g5j4j4d4g4ji6i7ddgfgg'
   try {
       const token = req.headers.authorization.split(' ')[1];
       const decodedToken = jwt.verify(token, 'TOKEN');
       const userId = decodedToken.userId;
       req.auth = {
           userId: userId
       };
	next();
   } catch(error) {
       res.status(401).json({ error });
   }
};

export default auth                                      