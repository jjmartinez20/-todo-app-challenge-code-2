import express, { Express } from 'express';
import tasksRouter from './routers/tasks.router';
import router from './routers/users.router';
import cors from 'cors';

import dotenv from 'dotenv';
dotenv.config();

const app: Express = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const port: string | undefined = process.env.PORT;

app.use('/users', router);
app.use('/tasks', tasksRouter);

app.listen(port, async () => {console.log(`Server started at port ${port}`)});