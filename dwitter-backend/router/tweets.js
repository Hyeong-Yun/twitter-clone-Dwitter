import express from 'express';
import 'express-async-errors';
import * as tweeetController from '../controller/tweet.js';
import {body} from 'express-validator'
import {validate} from '../middleware/validator.js';

const router = express.Router();

// contract Testing: Clinet-server
//
const validateTweet =  [
  body('text')
  .trim()
  .isLength({min: 3})
  .withMessage('text should be at least 3 characters'), 
  validate
]

router.get('/',tweeetController.getTweets)

router.get('/:id', tweeetController.getTweet)

//Post /tweets
router.post('/', validateTweet, tweeetController.createTweet)

// PUT/tweets/:id
router.put('/:id',validateTweet, tweeetController.updateTweet)

// Delete/ tweets/:id
router.delete('/:id', tweeetController.deleteTweet)

export default router;