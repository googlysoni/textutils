import React from 'react'
import PropTypes from 'prop-types';
//import { Link } from 'react-router-dom';
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
       <a className="navbar-brand" href="#">{props.title}</a>
    {/* <Link className="navbar-brand" href="/">{props.title}</Link> */}
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
          {/* <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link> */}
        </li>
        <li className="nav-item">
        {/* <Link className="nav-link" to="/about">{props.aboutext}</Link> */}
          {/* <a className="nav-link" href="/about">{props.aboutext}</a> */}
        </li>
        
      </ul>
      
    
      <div className={`custom-control custom-switch text-${props.mode === 'light' ? 'dark' : 'light'}`} >

  <input type="checkbox" className="custom-control-input" onClick={props.togglemode} id="customSwitch1"/>
  <label className="custom-control-label" htmlFor="customSwitch1">Enable Mode</label>
</div>
<div className={`custom-control custom-switch text-${props.semode === 'light' ? 'dark' : 'light'}`} >

  <input type="checkbox" className="custom-control-input" onClick={props.setogglemode} id="customSwitch2"/>
  <label className="custom-control-label" htmlFor="customSwitch2">Enable Mode2</label>
</div>
      <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav>
    
  )
}


Navbar.prototype={
    title: PropTypes.string,
    aboutext:PropTypes.string
}