import { Button } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import DeviceForm from '../../components/deviceForm';
import Header from '../../components/header';
import './index.css'

const Device = ({}) => {

  

    const childRef = useRef();

    const onAddPressed  = () => {
        childRef.current.onAddDevice()
    }

    return (
       <div className="container">
         <Header/>
         <div className="addDeviceText">
             Add Device
         </div>
         <DeviceForm ref={childRef}/>
         <div className="actionContainer">
         <div className="buttonContainer">
                <Button variant="contained" onClick={() => onAddPressed()}>
                    Cancel
                </Button>
            </div>
            <div className="buttonContainer">
              
                <Button variant="contained" onClick={() => onAddPressed()}>
                    Add
                </Button>
            </div>
            </div>
       </div>
    )
}
export default Device;
