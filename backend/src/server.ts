import bodyParser from 'body-parser';
import express, { Request, Response } from 'express';
import 'dotenv/config';
import AppRouter from './routes';
import connectDB from './config/database';
import { applyPassportStrategy } from './utils/passport.util';
const cookieParser = require('cookie-parser');
const passport = require('passport');

const cors = require('cors');

const app = express();
const router = new AppRouter(app);
connectDB();

app.set('port', process.env.PORT || 4200);
app.use(cookieParser())
app.use(passport.initialize());
applyPassportStrategy(passport);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

router.init();

const port = app.get('port');

const server = app.listen(port, () => console.log(`Server started on port ${port}`));

process.on('SIGTERM', () => {
  server.close(() => {
    process.exit(0);
  });
});

export default server;
