import { create } from "./create";
import { fetch } from "./read";
import { updateUser } from "./update";
import { deleteUser } from "./delete";
import { User } from "./user";
import * as exp from 'express';

import {Request,Response} from 'express';

const app = exp();
const port = 3000;
app.use(exp.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});


app.post('/create',async (req:exp.Request, res:exp.Response) => {
    // console.log(req);
    const {Name,age} = req.body;
    const data:User = {
        Name:Name,
        age:age
    }
    const result = await create(data);
    res.send(result);
})


app.put('/update',(req:exp.Request, res:exp.Response) => {
    const {id,Name,age}= req.query;
    if (typeof Name !== 'string'){ 
    res.send("Name Should be in string");
    return;
    }
    const parsedAge = parseInt(age as string, 10);

    if (isNaN(parsedAge)) {
        res.send("Age Should be in Number");
        return
    }
    if(typeof id !== 'string'){
        res.send("id Should be in string");
        return
    }
    const data : User={
        Name:Name,
        age:parsedAge
    }
    updateUser(data,id);
    res.send('Data Updated');
})
app.get('/getUsers',async (req:exp.Request, res:exp.Response)=>{
    // console.log("khurram");
    const result = await fetch();
    res.send(result);
})
app.delete('/deleteUser',async (req:exp.Request, res:exp.Response)=>{
    const {id}= req.query;
    if(typeof id !== 'string'){
        res.send("id Should be in string");
        return
    }
    deleteUser(id);
    res.send("Data Deleted");
})