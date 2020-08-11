import * as UserService from '../Services/user-crud.service';
import { User } from '../models/user';

export const getUserById = async (req:any, res:any) => {
    let id : string = req.params.id;
    const user: User = await UserService.getUserById(id);
    console.log(`in GET ${JSON.stringify(user)}`)
    try {
        res.status(200).send(
            user);
      } catch (e) {
        res.status(404).send(e.message);
      }
  };

  export const createUser = async (req:any, res:any) => {
    let user : User  = req.body
    console.log(`in POST ${JSON.stringify(user)}`)
    await UserService.createUser(user)
    try {
        res.status(200).send(
            'User Created');
      } catch (e) {
        res.status(404).send(e.message);
      }
  };

  export const updateUser = async(req:any, res : any)=>{
    let user : User  = req.body
    console.log(`in UPDATE ${JSON.stringify(user)}`)
    await UserService.updateUser(user)
    try {
        res.status(200).send(
            'User Updated');
      } catch (e) {
        res.status(404).send(e.message);
      }
  };

  export const deleteUser = async (req:any, res :any) =>{
    let id = req.body['id'];
    console.log(`in DELETE ${JSON.stringify(id)}`)
    await UserService.deleteUser(id)
    try {
      res.status(200).send(
          'User Deleted');
    } catch (e) {
      res.status(404).send(e.message);
    }
  }