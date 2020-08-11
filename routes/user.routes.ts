import * as UserCrud from '../controllers/user.contoller';
import {PostRequestSchema,UserPostRequestSchema} from '../Validations/Schemas/PostUserRequestSchema'
import {DeleteRequestSchema,UserDeleteRequestSchema } from '../Validations/Schemas/DeleteUserRequestSchema'
import { ValidatedRequest, createValidator } from "express-joi-validation";

const appRouter = (app : any) => {
    const validator = createValidator()
    app.get('/users/:id', async (req :any , res : any) => {
        UserCrud.getUserById(req, res)
     })
     
     app.post('/users', validator.body(PostRequestSchema), async (req: ValidatedRequest<UserPostRequestSchema>, res :any) => {
        UserCrud.createUser(req, res)
     })
     
     app.put('/users', validator.body(PostRequestSchema), async (req: ValidatedRequest<UserPostRequestSchema>, res:any) => {
        UserCrud.updateUser(req, res)
     })
     
     app.delete('/users',validator.body(DeleteRequestSchema), async (req : ValidatedRequest<UserDeleteRequestSchema>, res:any) => {
        UserCrud.deleteUser(req, res)
     })
}

export default appRouter;