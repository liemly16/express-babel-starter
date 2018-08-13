import express from 'express';

import sample from './sample'

let router = express.Router();

router.use('/sample', sample);

export default router;
