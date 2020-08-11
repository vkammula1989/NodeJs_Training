import  dbUser from "../data-access/models/user"
import sequelize from '../data-access/sequelize'
import { User } from "../models/user";


export const getUserById = async (id: string): Promise<User> => {
    return dbUser.findByPk(id).then((user)=>{        
        let user1 : User=  {
            id:'',
            login:'',
            password:'',
            age: null,
            isDeleted:null
        }
        user1.id = user.getDataValue('id')
        user1.login = user.getDataValue('login')
        user1.password = user.getDataValue('password')
        user1.isDeleted = user.getDataValue('isDeleted')
        user1.age = user.getDataValue('age')
        return user1
    }).catch((err)=>{
        throw new Error(err);        
    })
};

export const createUser = async (user: User): Promise<any>=> {
    return sequelize.authenticate().then(async() => {
        console.log('Connection has been established successfully.');
      }).then(()=>{
        return dbUser
        .create({
          id:  user.id,
          login : user.login,
          password: user.password,
          age : user.age,
          isDeleted: user.isDeleted
        })
      })
}

export const updateUser = async (user1: User): Promise<void> => {
    return dbUser
    .findByPk(user1.id).then((user)=>{
        user.update({
            id:  user1.id,
            login : user1.login,
            password: user1.password,
            age : user1.age,
            isDeleted: user1.isDeleted
          })
    })
}

export const deleteUser = async (id: string): Promise<void> => {
    return dbUser
    .findByPk(id).then((user)=>{
        user.update({
            isDeleted: true
          })
    })
}


/** InMemory Operations */

// import { User, Users } from "../models/user";

// export const getUserById = async (id: string): Promise<User> => {
//     const user = Users.find((User) => User.id === id)
//     return user;
// };

// export const createUser = async (user: User) => {
//     Users.push(user)
// }

// export const updateUser = async (user: User): Promise<void> => {
//     let index = Users.findIndex(d => d.id === user['id']);
//     if (index > 0 || index == 0) {
//         Users[index]['login'] = user['login'];
//         Users[index]['password'] = user['password'];
//         Users[index]['age'] = user['age'];
//         Users[index]['isDeleted'] = user['isDeleted'];
//     }
// }

// export const deleteUser = async (id: string): Promise<void> => {
//     console.log(`in delete product index is ${JSON.stringify(id)}`)
//     let index = Users.findIndex(user => user.id === id);
//     console.log(`in delete product index is ${index}`)
//     if (index > 0 || index == 0)
//         Users[index].isDeleted = true
// }