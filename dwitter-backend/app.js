import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import tweetRouter from './router/tweets.js'
import 'express-async-errors';

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan('tiny'));

app.use('/tweets', tweetRouter)

app.use((error, req, res, next)=>{
  console.error(error);
  res.sendStatus(500);
})

app.listen(8080);