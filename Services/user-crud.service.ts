import { User, Users } from "../models/user";

export const getUserById = async (id: string): Promise<User> => {
    const user = Users.find((User) => User.id === id)
    return user;
};

export const createUser = async (user: User) => {
    Users.push(user)
}

export const updateUser = async (user: User): Promise<void> => {
    let index = Users.findIndex(d => d.id === user['id']);
    if (index > 0 || index == 0) {
        Users[index]['login'] = user['login'];
        Users[index]['password'] = user['password'];
        Users[index]['age'] = user['age'];
        Users[index]['isDeleted'] = user['isDeleted'];
    }
}

export const deleteUser = async (id: string): Promise<void> => {
    console.log(`in delete product index is ${JSON.stringify(id)}`)
    let index = Users.findIndex(user => user.id === id);
    console.log(`in delete product index is ${index}`)
    if (index > 0 || index == 0)
        Users[index].isDeleted = true
}