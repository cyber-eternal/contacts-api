import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './routes';
import log from './components/utils/log';

dotenv.config();

require('./models');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '50mb' }));

app.options('*', cors());
app.use(cors());

routes.map(route => app.use(route.path, route.handler));

app.use('*', (req, res) => res.status(409).json({ message: 'Forbidden' }));

const port = process.env.PORT || 3000;

app.listen(port, () => log.info(`Server is running 🚀 on ${port} port, Process Pid: ${process.pid}`));
