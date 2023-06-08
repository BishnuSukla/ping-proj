import { FormControl, TextField } from '@mui/material'
import React from 'react'

const Input = ({id, value,placeholder="Enter data", updateValue,errorText='',width=165,minLength=0,maxLength=20}) => {
  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: width }}>
        <TextField 
        error={errorText?true:false} 
        variant="standard"  
        id={id} 
        labelid={id} 
        inputMode='number'
        value={value} 
        inputProps={{ minLength:minLength,maxLength:maxLength }}
        placeholder={placeholder}
        helperText={errorText}
        onChange={(e)=>{updateValue(e.target.value)}}/>
    </FormControl>
  )
}

export default Input