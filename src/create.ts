import { User} from "./user";
import { postdata } from "./api_communicator";
import { API_URL } from "./constants";
import { Endpoints } from "./enum"; 
import { fixUrl } from "./utils";
// create a const class where place all const variable in UPPER_CASE //Done

export const create = async (user:User): Promise<User> => {
    const url = fixUrl(`${API_URL}${Endpoints.USER}`); // create enum for endpoints
    const result:User = await postdata<User>(url,user);// create a response type
    return result;
}
