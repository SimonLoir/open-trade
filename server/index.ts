import * as express from 'express';
import * as cors from 'cors';
import * as fs from 'fs';
import * as bodyParser from 'body-parser';
import { exec } from 'child_process';

const path = './private/videos/';

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', express.static('./public/'));

app.listen(8080);
