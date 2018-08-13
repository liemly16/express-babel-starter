import express from 'express';

import {
    sampleController
} from '../controllers'

let router = express.Router();

/* GET home page. */
router.get('/', async function (req, res, next) {
    let samples = await sampleController.getList();
    res.json({
        result: samples
    });
});

export default router;
