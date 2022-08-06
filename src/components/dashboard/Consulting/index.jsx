import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../../states/app.context';
import CallOptions from './CallOptions';
import CallNotification from './Notifications';
import VideoPlayer from './VideoPlayer';

const Consulting = () => {
    const { onStart } = useContext(AppContext)

    useEffect(() => {
        onStart();
    }, [])
    
    return (
        <>
            <VideoPlayer />
            <CallOptions>
                <CallNotification />
            </CallOptions>
        </>
    );
};

export default Consulting;