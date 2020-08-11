import express from "express";
import bodyParser from "body-parser"
import path from "path"
import cookieParser from "cookie-parser"
import appRouter from "./routes/user.routes"
const app = express();
const router = express.Router()

const port = 5000

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// use middleware
app.use(bodyParser());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "/css/")));

app.use('/', router)

app.listen(port, function () {
   console.log(`server started at http://localhost:${port}`)
})

const routes = appRouter(app);

app.get('/', function (req, res) {
   res.send('Hello World!!');
})
