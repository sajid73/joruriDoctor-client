import { Link } from 'react-router-dom';

const DashDrawer = () => {
    return (
        <div>
            <Link to="profile">Profile</Link>
            <Link to="videocall">videocall</Link>
        </div>
    );
};

export default DashDrawer;