import http from 'http';
import express from 'express';
import nunjucks from 'nunjucks';
import path, {dirname} from 'path';
import { fileURLToPath } from 'url';

import mainRoute from './api/routes/main.js';


const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const app = express()
const port = 1010

app.set('port', process.env.PORT || port)
app.set("view engine", "njk");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, 'public')))

nunjucks.configure('views', {
  autoescape: true,
  inheritExtension: true,
  express: app,
})

app.use('/', mainRoute)

http.createServer(app).listen(app.get('port'), () => {
  console.log(`app listening on port http://localhost:${app.get('port')} 🚀🚀`)
})
