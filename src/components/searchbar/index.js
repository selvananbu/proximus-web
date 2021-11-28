import { TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './index.css'

const SearchBar = ({}) => {
    return (
        <div className="searchContainer">
            <TextField id="standard-basic" label="Search by Device Name,Platform or Owner..." variant="standard" fullWidth/>
        </div>
    )
}
export default SearchBar;
