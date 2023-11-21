import React from 'react';
import {Box, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio} from "@mui/material";
import {useState} from "react";
import "./radiosc.scss";


function Radiosc() {
    const [value, setValue]= useState("")
    console.log({value})

    const handleChange = (event) => {
        setValue(event.target.value)
}
  return (
    <div className="radio">
    <Box>
        <FormControl>
            <FormLabel className="systemtitle" id="system-selection-group-label">
                System Preference
            </FormLabel>
            <RadioGroup className="system-selection-group" 
            aria-labelledby='system-selection-group-label'
            value={value}
            onChange={handleChange}
            >
                <div className= "label">
                <FormControlLabel control={<Radio size="small"/>} label="Adaptive System" value=" adaptive"/>
                <FormControlLabel control={<Radio size="small"/>} label="Fixed-Time Frame System" value=" fixed"/>
                </div>
            </RadioGroup>
        </FormControl>
    </Box>
    </div>
  )
}

export default Radiosc;