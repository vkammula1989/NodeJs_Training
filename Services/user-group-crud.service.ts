import  dbUserGroup from "../data-access/models/usergroup"
import sequelize from '../data-access/sequelize'
import { UserGroup } from "../models/usergroup";


export const getUserById = async (id: string): Promise<UserGroup> => {
    return null
};

export const createUser = async (userGroup: UserGroup): Promise<any>=> {
    return sequelize.authenticate().then(async() => {
        console.log('Connection has been established successfully.');
      }).then(()=>{
      })
}

export const updateUser = async (user1: UserGroup): Promise<void> => {
    return dbUserGroup
    .findByPk(user1.id).then((user)=>{
    })
}

export const deleteUser = async (id: string): Promise<void> => {
    return dbUserGroup
    .findByPk(id).then((user)=>{
    })
}
