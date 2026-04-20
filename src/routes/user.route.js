import express from 'express';
import { register } from '../controllers/user.controller.js';

const router = express.Router();

router.post('/login', (req, res) => {
  res.json({ message: 'Login route works!' });
});

router.post('/register', register);

export default router;
