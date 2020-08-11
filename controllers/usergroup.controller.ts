import * as UserGroupService from '../Services/user-group-crud.service';
import { UserGroup } from '../models/usergroup';

export const getUserById = async (req: any, res: any) => {
    let id: string = req.params.id;
    const user: UserGroup = await UserGroupService.getUserById(id);
    console.log(`in GET ${JSON.stringify(user)}`)
    try {
      res.status(200).send(
        user);
    } catch (e) {
      res.status(404).send(e.message);
    }
  };
  
  export const createUser = async (req: any, res: any) => {
    let user: UserGroup = req.body
    console.log(`in POST ${JSON.stringify(user)}`)
    try {
      await UserGroupService.createUser(user).then(() => {
        res.status(200).send(
          'User Created');
      }).catch((err) => {
        res.status(404).send(err.message);
      })
  
    } catch (e) {
      res.status(404).send(e.message);
    }
  };
  
  export const updateUser = async (req: any, res: any) => {
    let user: UserGroup = req.body
    console.log(`in UPDATE ${JSON.stringify(user)}`)
    try {
      await UserGroupService.updateUser(user).then(() => {
        res.status(200).send(
          'User Updated');
      }).catch((err) => {
        res.status(404).send(err.message);
      })
    } catch (e) {
      res.status(404).send(e.message);
    }
  };
  
  export const deleteUser = async (req: any, res: any) => {
    let id = req.body['id'];
    console.log(`in DELETE ${JSON.stringify(id)}`)
  
    try {
      await UserGroupService.deleteUser(id).then(() => {
        res.status(200).send(
          'User Deleted');
      }).catch((err) => {
        res.status(404).send(err.message);
      })
    } catch (e) {
      res.status(404).send(e.message);
    }
  }