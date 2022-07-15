import { Outlet } from "react-router-dom";
import ProfileLayout from "../../common/Profile/ProfileLayout";


const EditProfile = () => {

    return (
        <div>
            <ProfileLayout />
            <Outlet/>
        </div>
    );
};

export default EditProfile;