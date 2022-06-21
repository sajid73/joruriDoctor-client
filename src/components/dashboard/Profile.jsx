import { useContext } from "react";
import { AppContext } from "../../states/app.context";
const Profile = () => {
   
    const { user } = useContext(AppContext);
    console.log(user);
    return (
        <div>
            User Name: {user.name}
        </div>
    );
};

export default Profile;