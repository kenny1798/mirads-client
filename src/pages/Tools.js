import React from 'react';
import '../App.css';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import header1 from '../components/header1.jpg';
import header2 from '../components/header2.jpg';

function Tools() {



  
  return (
    <div className='App'>
    <div className="container mt-3">
      <div className="row justify-content-center text-center">
        <div className="col-lg-12">
        <h1 className="mt-4 header-title">MARKETING TOOLS</h1>
        <p className='header-desc'> Automations tools that will make your <span className='higlight-desc'>Sales and Marketing</span>  channel easier than ever!</p>
        </div>

  <div className="col-lg">
  <div className="card text-center my-5">
  <div className="card-header">
    <img src={header1} alt='Mgen-Header' className='image-header'/>
  </div>
  <div className="card-body">
    <h5 className="card-title">MGEN - Lead Generation Tool</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <div className="d-grid gap-2 mt-4 mx-auto">
    <Link className='btn btn-primary' to="/mgenform">Learn More</Link>
    </div>
  </div>
  </div>
</div>


<div className="col-lg">
<div className="card text-center my-5">
  <div className="card-header">
  <img src={header2} alt='Mgen-Header' className='image-header'/>
  </div>
  <div className="card-body">
    <h5 className="card-title">Automatic Copywriting Generator</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <div className="d-grid gap-2 mt-4 mx-auto">
    <Link className='btn btn-primary' to="/auto-copywriting">Generate Now</Link>
    </div>
  </div>
</div>
</div>
    </div>
    </div>
    </div>
    
  );
}

export default Tools