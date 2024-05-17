import { putdata } from "./api_communicator";
import { User } from "./user";
import { API_URL } from "./constants";

const updateUser = async(user:User,id:string) => {
    try {
        const url=`${API_URL}/users/${id}`;  
        const response = await putdata(url,user);
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

export {updateUser};