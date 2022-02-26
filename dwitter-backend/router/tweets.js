import express from 'express';
import 'express-async-errors';
import * as tweeetController from '../controller/tweet.js';
const router = express.Router();

router.get('/',tweeetController.getTweets)

router.get('/:id', tweeetController.getTweet)

//Post /tweets
router.post('/', tweeetController.createTweet)

// PUT/tweets/:id
router.put('/:id', tweeetController.updateTweet)

// Delete/ tweets/:id
router.delete('/:id', tweeetController.deleteTweet)

export default router;