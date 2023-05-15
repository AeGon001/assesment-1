import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Home = () => {
    var[users,setUsers]=useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((response)=>{
       console.log(response.data)
       setUsers(response.data)
    })
    .catch((error)=>console.log(error))
    },[])

  return (
    <div>
        <br/><br/><br/>
        <Typography variant='h3'>Axios View</Typography>
        <br/>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((value,index)=>{
                        return(
                            <TableRow key={index}>
                                <TableCell>{value.id}</TableCell>
                                <TableCell>{value.title}</TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>  
    
      
    </div>
  )
}

export default Home