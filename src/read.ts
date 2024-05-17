import { getdata } from "./api_communicator";
import { User } from "./user";
import { API_URL } from "./constants";

async function fetch(){
    const url=`${API_URL}/users`;
    const result = await getdata<User>(url);
    return result;
}

export {fetch};