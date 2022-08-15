import React, { useContext } from 'react';
import { AppContext } from '../../../states/app.context';
import CallNotification from './Notifications';
import Prescription from './Prescription';
import VideoPlayer from './VideoPlayer';

const Consulting = () => {
    const { user } = useContext(AppContext)
    return (
        <>
            <VideoPlayer />
            <CallNotification />
            {/* <CallOptions>
            </CallOptions> */}
            {user?.role === 'doctor' ? <Prescription /> : ' '}
        </>
    );
};

export default Consulting;