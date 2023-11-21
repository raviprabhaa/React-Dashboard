import React from 'react';
import {Box, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio} from "@mui/material";
import {useState} from "react";
import "./radiopl.scss";


function RadioPL() {
    const [value, setValue]= useState("")
    console.log({value})

    const handleChange = (event) => {
        setValue(event.target.value)
}
  return (
    <div className="radiopl">
    <Box>
        <FormControl>
            <FormLabel className="systemtitlep" id="system-selection-group-label">
                Priority Lane
            </FormLabel>
            <RadioGroup className="system-selection-group" 
            aria-labelledby='system-selection-group-label'
            value={value}
            onChange={handleChange}
            >
                <div className= "label">
                <FormControlLabel control={<Radio size="small"/>} label="Lane 1" value=" lane1"/>
                <FormControlLabel control={<Radio size="small"/>} label="Lane 2" value=" lane2"/>
                <FormControlLabel control={<Radio size="small"/>} label="Lane 3" value=" lane3"/>
                <FormControlLabel control={<Radio size="small"/>} label="Lane 4" value=" lane4"/>

              
                </div>
            </RadioGroup>
        </FormControl>
    </Box>
    </div>
  )
}

export default RadioPL;