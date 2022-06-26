import { useContext } from "react";
import { AppContext } from "../../../states/app.context";

const ProfileDetails = () => {
  const { user } = useContext(AppContext);
  console.log(user);
  return <div>{user ? <div>
    <h1>Name: {user.name}</h1>
    <h1>Email: {user.email}</h1>
    <h1>Role: {user.role}</h1>

  </div> : <h1>Edit Profile</h1>}</div>;
};

export default ProfileDetails;
