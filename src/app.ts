import express ,{Application,Request,Response} from "express";
import { v4 as uuidv4 } from 'uuid';

import { IUser } from "./types/type.user";
const app:Application = express()
app.use(express.json());
let users:IUser[]=[];

app.get('/',(req,res)=>{

  res.json(users)
});

app.post('/',(req,res)=>{

const user= req.body as IUser
user.id=uuidv4()
users.push(user);
res.json({"message":"Done"})



});
app.put('/:id',(req,res)=>{

  const {id} =req.params;
  const user=req.body as IUser;
  const Upduser= users.filter(i => i.id !==id)
  Upduser.push(user)
users=Upduser
res.json({"message":"Done"})

});
app.delete('/:id',(req,res)=>{

  const {id} =req.params;
  const user=req.body as IUser;
  const Upduser= users.filter(i => i.id !==id)
users=Upduser
res.json({"message":" delete Done"})

});







app.listen(3000,()=>console.log('Server started'));


