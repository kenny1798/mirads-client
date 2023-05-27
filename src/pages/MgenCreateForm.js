import React, { useState, useEffect } from 'react';
import axios from '../api/axios';
import { useAuthContext } from '../hooks/useAuthContext';
import logo from '../components/logo.png';
import { useNavigate } from 'react-router-dom';

function MgenCreateForm() {

const {user} = useAuthContext();
const [errMsg, setErrMsg] = useState("");
const [clientLink, setClientLink] = useState("");
const [formTitle, setFormTitle] = useState("");
const [formBody, setFormBody] = useState("");
const [formImage, setFormImage] = useState("");
const [wsText, setWsText] = useState("");
const navigate = useNavigate();

const noSpace = (e) => {
    if (e.key === " ") {
      e.preventDefault();
    }
  };
    
    const createForm = () => {
      navigate(`/mgenform/form/${clientLink}`)
      const formData = new FormData()
      formData.append('form_image', formImage)
      formData.append('session_client', clientLink)
      formData.append('form_title', formTitle)
      formData.append('form_body', formBody)
      formData.append('whatsapp_text', wsText)
      axios.post('/whatsapp-auth', formData, {headers: {
        accessToken : user.token
      }})
    }


  return (
    <div className='App'>
    <div className="container mt-3">
      <div className="row justify-content-center text-center">
        <div className="col-lg-12">
        <h1 className="mt-4 header-title">M-GEN</h1>
        <p>Increase your conversion rate with our automate WhatsApp message sender on lead form submit!</p>
        </div>
        </div>
    <div className='row justify-content-center'>
    <div className="col-md-6">
  <div className='card'>
  <div className='row justify-content-center'>
    
    <form encType='multipart/form-data'>
      <div className='row g-3 my-4 justify-content-center'>
    <h4 className='text-center'>Create Your Form</h4>
  </div>
  <div className='container'>
  <div className='row justify-content-center'>
  <div className='col'>
  <label><strong>Form Link</strong></label>
      <div class="input-group">
      <span class="input-group-text" id="basic-addon1"> https://mirads.io/mgen/ </span>
      <input type="text" class="form-control" placeholder="e.g: miradsmarketing" aria-describedby="basic-addon1" onChange={(event) => {setClientLink(event.target.value)}} onKeyDown={noSpace} required />
    </div>
          <label className='mt-5'><strong>Form Title</strong> - Your lead gen form title</label>
          <input type="text" className='form-control shadow-none'  onChange={(event) => {setFormTitle(event.target.value)}} required maxLength="254" />
          <label className='mt-5'><strong>Form Body</strong> - Your lead gen form body</label>
          <textarea type="textarea" className='form-control shadow-none' onChange={(event) => {setFormBody(event.target.value)}} required maxLength="254" />
          <label className='mt-5'><strong>Image</strong> - Your lead gen form image</label>
          <input type="file" className='form-control shadow-none' onChange={(event) => {setFormImage(event.target.files[0])}} required />
          <label className='mt-5'><strong>WhatsApp Text</strong> - Your auto WhatsApp text</label>
          <textarea type="textarea" className='form-control shadow-none' onChange={(event) => {setWsText(event.target.value)}} required maxLength="254" />
          <div className="d-grid my-3 gap-2">
          <button className='btn btn-primary mt' onClick={createForm}>Submit Form</button>
          </div>
          
          
  </div>
  </div>
  </div>
</form>
</div>
    </div>
    </div>
  <div className='col-md-6'>
    <div className='card'>
    <div className="container">
      <div className="row text-center">
        <div className="col-lg-12 justify-content-center">
        <h4 className='text-center'>Preview</h4>
        <h1 className="mt-4 mgen-header-title">{formTitle}</h1>
        </div>
        </div>
<div className='row justify-content-center'>
<div className="col-md-8 mx-2">
{!formImage ? (<></>): (<img src={URL.createObjectURL(formImage)} alt='Mgen-Header' className='mgen-image-header'/>)}


<div className="card">
  <div className="card-body">
    <p className="card-text text-center">{formBody}</p>
  </div>
  <div className="card-body">
    <label>Name</label>
    <input type="text" className='form-control shadow-none' name="name" readOnly maxLength="254" />
    <label className='mt-3'>WhatsApp Number</label>
    <input type="text" className='form-control shadow-none' name='phonenumber' readOnly />
    <div className="d-grid gap-2 mt-4 mx-auto">
      <button className='btn btn-success'>Submit Details</button>
    </div>
    <p className='text-end mt-4 mx-4'><small>Powered by:</small> <a href='#'><img src={logo} alt='Mirads' width='80' /></a></p>
</div>
</div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default MgenCreateForm