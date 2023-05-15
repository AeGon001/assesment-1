import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Add = () => {
  return (
    <div>
        <Typography variant='h3' style={{color:"aqua"}}>ADD DETIALS </Typography>
        <br/>
        <TextField label="BLOG NAME" variant='outlined'></TextField>
        <br/><br/>
        <TextField label="Discription" variant='outlined'></TextField>
        <br/><br/>
        <TextField label="Author Name" variant='outlined'></TextField>
        <br/><br/>
        <Button variant='contained'>submit</Button>
    </div>
  )
}

export default Add