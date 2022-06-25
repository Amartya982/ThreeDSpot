import React from 'react'
import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import TextField from '@mui/material/TextField';
import "./CreateOrder.css"

const fileTypes = ["JPEG", "PNG", "GIF"];
const CreateOrder = () => {

    const [ setFile] = useState(null);
    const handleChange = (file) => {
      setFile(file);
    }
  return (
    <section className="hero">
        <div className="hero-body">
            <p className='order-title'>
                Title
            </p>
        <TextField  className='title-field'  style={{backgroundColor:"white",marginBottom:"52px"}} />
        <p className='order-title'>
        Description
        </p>
        <TextField  

          multiline
          rows={6} className='description-field'  style={{backgroundColor:"white",marginBottom:"52px"}} />
           <p className='order-title'>
        Preview Images
        </p>
        <FileUploader
        multiple={true}
        className="file-uploader"
        handleChange={handleChange}
        name="file"
        types={fileTypes}
      />
      <div className='but'>
      <button className="create-order-button">Submit</button>
      <button className="create-order-button-cancel">Cancel</button>
      </div>
      
        </div>
     
    </section>
  )
}

export default CreateOrder