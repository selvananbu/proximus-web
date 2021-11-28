import React, { useEffect, useState } from 'react';
import './index.css'
import {NotificationContainer, NotificationManager} from 'react-notifications';
import inActiveIcon from '../../assets/image/inactive.jpg'
import activeIcon from '../../assets/image/active.jpg'
import editIcon from '../../assets/image/editLight.png'
import deleteIcon from '../../assets/image/deleteLight.png'
import rightIcon from '../../assets/image/rightIconLight.png'
import { useNavigate } from 'react-router';
import { getQuoteOftheDay } from './helper';
import { useDispatch } from 'react-redux';
import { deleteItemFromList } from '../../actions';

const DeviceItem = ({device}) => {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const { deviceName, platform, owner } = device;
    let activeInactiveIcon = device?.active ? activeIcon : inActiveIcon

    const onEditItemPressed = () => {
        navigate("/addDevice",{replace:true,state:device})
    }
    const onDevicePressed = () => {
        navigate("/viewDevice",{replace:true,state:device})
    }
    const onDeletePressed = () => {
       let responseAlert =  window.confirm("Are you sure you want to delete the device ?")
       if(responseAlert){
        onDeleteConfirmed();
       }
    }

    const onDeleteConfirmed = async () => {
        // let response = await getQuoteOftheDay();             //Quote of the day has been disable due to cross origin issue from senquotes website
        dispatch(deleteItemFromList({ json: device }))
        // if (response?.status === 200) {
           
            // let data = response?.data[0];
            // NotificationManager.success('Success message', 'Title here');
            // Toast.show({
            //     type: 'success',
            //     text1: data['q'],
            //     text2: `-${data['a']}`
            // });
        // }
       
    }

    
    return (
        <div className="container" >
            <div className="imageContainer" onClick={() => onDevicePressed()}>
                <img src={activeInactiveIcon} className="activeImage"/>
            </div>
            <div className="deviceTextContainer" onClick={() => onDevicePressed()}>
                <div className="deviceNameText">
                    {deviceName}
                </div>
                <div className="deviceNameText">
                    {owner}/{platform}
                </div>
            </div>
            <div className="editContainer">
               <div className="iconContainer" onClick={() => onEditItemPressed()}>
            <img src={editIcon} className="activeImage"/>
            </div>
            <div className="iconContainer" onClick={() => onDeletePressed()}>
            <img src={deleteIcon} className="activeImage"/>
            </div>
            </div>

            <div className="iconContainer" onClick={() => onDevicePressed()}>
            <img src={rightIcon} className="activeImage"/>
            </div>
            
        </div>
    )
}
export default DeviceItem;
