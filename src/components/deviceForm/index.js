import { Button, TextField } from '@mui/material';
import React, { useEffect, useImperativeHandle, useState } from 'react';
import { forwardRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { addItemToList } from '../../actions';

import './index.css'

const DeviceForm = forwardRef((props, ref) => {

    const dispatch = useDispatch();
    let navigate = useNavigate();

    const [deviceName, setDeviceName] = useState('');
    const [platform, setPlatform] = useState('')
    const [ownerName, setCurrentOwner] = useState('')

    useImperativeHandle(
        ref,
        () => ({
            onAddDevice() {
                let body = {
                    _id: uuidv4(),
                    deviceName: deviceName,
                    platform: platform,
                    // purchaseDate:date.toUTCString(),
                    // active:isActive,
                    owner:ownerName
                }
                dispatch(addItemToList({ json: body }));
                clearData();
                navigate('/');
            }
        }),
    )

    const clearData = () => {
        setCurrentOwner('')
        setDeviceName('')
        setPlatform('')
    }

    return (
        <div className="container">
            <div className="textInputContainer">
                <TextField id="standard-basic"
                    label="Device name"
                    variant="standard"
                    fullWidth
                    value={deviceName}
                    onChange={(event) => setDeviceName(event.target.value)} />
            </div>
            <div className="textInputContainer">
                <TextField id="standard-basic"
                    label="Platform"
                    variant="standard"
                    fullWidth
                    value={platform}
                    onChange={(event) => setPlatform(event.target.value)} />
            </div>
            <div className="textInputContainer">
                <TextField id="standard-basic"
                    label="Current owner"
                    variant="standard"
                    fullWidth
                    value={ownerName}
                    onChange={(event) => setCurrentOwner(event.target.value)} />
            </div>

        </div>
    )
})
export default DeviceForm;
