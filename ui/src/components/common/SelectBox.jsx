import { FormControl, FormHelperText, MenuItem, Select } from '@mui/material'
import React from 'react'

const SelectBox = ({id, value, options=[] ,updateValue,errorText='',width=165}) => {
  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: width }}>
        <Select
            error={errorText?true:false} 
            labelid={id} 
            id={id}
            value={value}
            onChange={(e)=>{updateValue(e.target.value)}}
            >
            {
                options.map((option)=>{
                    return <MenuItem disabled={option.disabled} key={option.key} value={option.value}>{option.value}</MenuItem>
                })
            }
            
        </Select>
        {errorText && <FormHelperText style={{color:'red'}}>{errorText}</FormHelperText>}
    </FormControl>
  )
}

export default SelectBox