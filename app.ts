import express from "express";
import bodyParser from "body-parser"
import path from "path"
import cookieParser from "cookie-parser"
import * as UserCrud from './Services/user-crud';
import {PostRequestSchema,UserPostRequestSchema} from './Validations/Schemas/PostUserRequestSchema'
import {DeleteRequestSchema,UserDeleteRequestSchema } from './Validations/Schemas/DeleteUserRequestSchema'
import { ValidatedRequest, createValidator } from "express-joi-validation";

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

const validator = createValidator()

app.get('/', function (req, res) {
   res.send('Hello World!!');
})

app.get('/users/:id', async (req, res) => {
   UserCrud.getUserById(req, res)
})

app.post('/users', validator.body(PostRequestSchema), async (req: ValidatedRequest<UserPostRequestSchema>, res) => {
   UserCrud.createUser(req, res)
})

app.put('/users', validator.body(PostRequestSchema), async (req: ValidatedRequest<UserPostRequestSchema>, res) => {
   UserCrud.updateUser(req, res)
})

app.delete('/users',validator.body(DeleteRequestSchema), async (req : ValidatedRequest<UserDeleteRequestSchema>, res) => {
   UserCrud.deleteUser(req, res)
})