import React, { useEffect, useState } from 'react';
import './index.css'

const DeviceItem = ({device}) => {
    const { deviceName, platform, owner } = device;
    return (
        <div className="container">
            {deviceName}
        </div>
    )
}
export default DeviceItem;
