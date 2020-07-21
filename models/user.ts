export interface User {
     id : string;
     login :string;
     password: string;
     age : number;
     isDeleted : boolean;
}

export const Users :User[]= [
    {
      id: '1',
      login : 'TestUser',
      password : 'test1234',
      age: 20,
      isDeleted :false      
    }
]