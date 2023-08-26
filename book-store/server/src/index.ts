import express, {Express, Request, Response } from 'express';
// import {MongoClient} from 'mongodb';
const { MongoClient } = require("mongodb");
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';

dotenv.config();

import { env } from './config/index';

import {IUser} from './types/users.types';

const uri = "place mongo uri here";
const client = new MongoClient(uri);
const database = client.db('web-fellowship');
const usersCollection = database.collection('users');

const rolesCollection = database.collection('roles');

const app: Express = express();
const port = process.env.PORT;

app.use(cors({origin: '*'}));
app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Server is running...')
})

app.get('/users', async(req:Request, res: Response) => { 
    // const usersList = await usersCollection.find().toArray();
    // res.send(usersList);

    const query = {name: "USER"}
    const rolesList = await rolesCollection.findOne(query);
    res.send(rolesList);
})

async function getAdminRoleId() {
    const adminRole = await rolesCollection.findOne({name: "ADMIN"});
    return adminRole ? adminRole._id : null;

}

app.post('/signup', async(req: Request, res: Response) => {
    const { firstName, lastName, gender, phoneNumber, email, password } = req.body;
    const adminRoleId = await getAdminRoleId();

    const userData: IUser = {
        firstName,
        lastName,
        gender,
        phoneNumber,
        email,
        password,
        role: adminRoleId
    } 
    const userDataList = await usersCollection.insertOne(userData)
    res.send(userDataList);
    // console.log(userDataList);
})

app.post('/login', async(req: Request, res: Response) => {
    const { email, password } = req.body;

    const userInfo = await usersCollection.findOne({email})

    // console.log(userInfo.email);
    // console.log(userInfo.password);

    if(userInfo.email === email && userInfo.password == password){
        res.status(200).send("Login Successful");
    } else {
        res.status(401).send("Unauthorized User")
    }
})



app.all('*', (req: Request, res: Response) => {
    res.status(400).send('Path not found');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${env.PORT}`);
});
