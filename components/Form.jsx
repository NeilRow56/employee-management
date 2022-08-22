import UpdateUserForm from "./UpdateUserForm";
import AddUserForm from "./AddUserForm";

export default function Form(){

    const flag = true;

    return (
        <div className="container mx-auto py-5">
            { flag ? <AddUserForm /> : <UpdateUserForm /> }
        </div>
    )
}