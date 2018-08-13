import http from 'http';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import index from './routes/index';
import express from 'express';
import path from 'path';
import mongoose from 'mongoose';

mongoose.connect("mongodb://thanhliem98:123456a@ds119732.mlab.com:19732/express-babel-starter", () => {
    console.log("CONNECT MONGODB SUCCESSFULLY!");
});

var app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', index);

export default app;