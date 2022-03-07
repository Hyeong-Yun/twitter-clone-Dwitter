import express from 'express';
import 'express-async-errors';
import helmet from 'helmet';
import morgan from 'morgan';
import tweetRouter from './router/tweets.js';
import authRouter from './router/auth.js'

const app = express();

app.use(helmet())
app.use(morgan('tiny'));
app.use(express.json());

app.use('/tweets', tweetRouter)
app.use('/auth', authRouter)

app.use((req, res, next)=>{
  res.sendStatus(404);
})

app.use((req, res, next)=>{
  console.error(error);
  res.sendStatus(500);
})

app.listen(8080)