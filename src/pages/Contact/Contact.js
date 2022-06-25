import React from 'react'
import man from "../../assets/clipart378694 1.png"
import { TextField } from '@material-ui/core'
import styled from 'styled-components'

import "./Contact.css"

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'white',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#fffff',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#5B5B5B',
      borderRadius:"14px",
 
    },
    '&:hover fieldset': {
      borderColor: '#5B5B5B',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#5B5B5B',
    },
  },
});



const Contact = () => {
  return (

    <section className='hero contact-section'>
      <div className="hero-body">
        <div className="columns">
          <div className='column contact-image'>
            <figure>
              <img src={man} alt="" />
            </figure>

          </div>
  

          <div className="column">
            <p className='contact-title has-text-centered'>Contact US</p>
            <br/>

            <CssTextField id="outlined-basic" color="secondary"  label="Outlined" variant="outlined"  focused />
            <br/>
            <br/>
            <CssTextField id="outlined-basic" color="secondary"  label="Outlined" variant="outlined"  fullWidth focused />
            <br/>
            <br/>
            <CssTextField id="outlined-basic" color="secondary"  label="Outlined" variant="outlined"  fullWidth  focused />
            <br/>
            <br/>
            <br/>
            <div className="column">
              <button className='submit-button'>Submit</button>
            </div>
          </div>





        </div>

      </div>
    </section>
  )
}

export default Contact
