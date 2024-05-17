import { deleteData } from "./api_communicator";
import { API_URL } from "./constants";

const deleteUser = async (id:string) => {  // update all method into arrow functions
    try {
        const url=`${API_URL}/users/${id}`; // create a utils class and add a method to fix the url. // \\ '  '
        const response = await deleteData(url);
        if(response){
            console.log("deleted");
        }
        // console.log(response);
    } catch (error) {
        console.log(error);        
    }
}

export {deleteUser};