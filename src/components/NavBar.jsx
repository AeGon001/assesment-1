import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar =() => {
  return (
    <div>
     <br/><br/><br/>
        <AppBar>
            <Toolbar>
                <Typography sx={{flexGrow:1}} align="left" >Blogers.net</Typography>
                <Button><Link to="/home" style={{color:'white'}}>HOME</Link></Button>
                <Button><Link to="/add" style={{color:'white'}}>ADD </Link></Button>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default  NavBar
