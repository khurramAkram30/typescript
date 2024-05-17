import axios from "axios";
import { User } from "./user";
// convert this class into one method that handle all types.
async function postdata<T>(url:string,data:T): Promise <T> {
    try {
        const res=await axios.post(url,data);
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

async function getdata<T>(url:string): Promise <T> {
    try {
        const res=await axios.get(url);
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

const putdata = async (url:string,data:User):Promise <User> =>{
    try {
        const res= await axios.put(url,data);
        return res.data;
    } 
    catch (error) {
        console.log(error);
    }
} 

const deleteData= async (url:string) => {
    try {
        const res = await axios.delete(url);
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export {postdata,getdata,putdata,deleteData};