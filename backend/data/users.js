import bcrypt from 'bcrypt';

const users = [
    {
        name : "admin User",
        email : "admin@email.com",
        password : bcrypt.hashSync('12345' , 10),
        isAdmin : true

    },
    {
        name : "John Doe",
        email : "john@email.com",
        password : bcrypt.hashSync('12345' , 10),
        isAdmin : false

    },
    {
        name : "Jane Doe",
        email : "jane@email.com",
        password : bcrypt.hashSync('12345' , 10),
        isAdmin : false

    }
];


export default users;