import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './index.css'

const ActionContainer = ({}) => {
    let navigate = useNavigate();

    const onAddDevicePressed = () => {
        navigate("/addDevice",{replace:true})
    }
    return (
        <div className="actionContainer">
            <div className="buttonContainer">
                <Button variant="contained" onClick={() => onAddDevicePressed()}>
                    Add
                </Button>
            </div>
        </div>
    )
}
export default ActionContainer;
