import React from 'react'
import './Navbar.css'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
// import SearchIcon from '@mui/icons-material/Search';


const Navbar = () => {
  return (
    <>
      <nav>
        <section className="nav-section-left">
          <img src="../images/toddle.png" alt="" />
        </section>
        <section className="nav-section-right">
          {/* input search field */}
          <TextField
          className='nav-input'
          id="outlined-start-adornment"
          sx={{ m: 1, width: '35ch',}} 
          InputProps={{
            startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
          }}
          
        />

          {/*  create board button */}
          <Button className='nav-button' variant="contained" color="error">Contained</Button>


        </section>
      </nav>
    </>
  )
}

export default Navbar