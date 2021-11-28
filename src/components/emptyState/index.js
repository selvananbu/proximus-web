import React from 'react';
import emptyIcon from '../../assets/image/emptyState.png'
import { Link } from "react-router-dom";

const EmptyState = ({
    
}) => {
    return (
   <div>
        <img src={emptyIcon} alt="logo" />
        <div>
        <div>
              Oops! no devices found in the intventory you can
           </div>
           <div>
              no problem you can add <Link to="/addDevice">here</Link> .
           </div>
           </div>
   </div>
);
}

export default EmptyState;
