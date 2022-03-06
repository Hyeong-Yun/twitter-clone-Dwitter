import express from 'express';
import {} from 'express-async-errors';
import {body} from 'express-validator';
import { validate } from '../middleware/validator';
import * as authContller from '../controller/auth.js'

const router = express.Router();

const validateCredectial = [
  body('username')
    .trim()
    .notEmpty()
    .withMessage('username should be at least 5 characters'),
  body('password')
    .trim()
    .isLength({min: 5})
    .withMessage('password should be at least 5 characters'),
  validate,
]