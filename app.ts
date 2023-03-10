import express from 'express';
import bodyParser from 'body-parser';

import todosRoutes from './route/todos'

const app=express();
app.use(bodyParser.json()) // body parser is using for parsing incoming req body

app.use(todosRoutes)

app.listen(3000)