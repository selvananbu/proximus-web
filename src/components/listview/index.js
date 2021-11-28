import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import DeviceItem from '../deviceItem';
import EmptyState from '../emptyState';
import './index.css'

const ListView = ({}) => {

    const deviceReducer = useSelector(state => state.deviceReducer);

    console.log("Devic",deviceReducer);

    return (
        <div className="headerContainer">
              {
                    deviceReducer?.searchFilter !== ''
                        ?
                        deviceReducer?.filterList?.map((device, idx) => {
                            return (
                                <DeviceItem device={device}  key={idx + "_"} />
                            )
                        })
                        :
                        deviceReducer?.deviceList?.length  > 0
                        ?
                        deviceReducer?.deviceList?.map((device, idx) => {
                            return (
                                <DeviceItem device={device}  key={idx + "_"} />
                            )
                        })
                        :
                        <EmptyState/>
                    }
        </div>
    )
}
export default ListView;
