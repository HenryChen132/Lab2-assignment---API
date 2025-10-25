import React from 'react';
import { Link } from 'react-router-dom';
export default function Layout() {
return (
<>
<i style={{float: 'left', textDecoration: 'underline', color: 'lightblue' }}>Student name: HaoxuanChen</i>
<i style={{float: 'right', textDecoration: 'underline', color: 'lightblue' }}>Student ID: 301420628</i>
<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
  <img 
    src="/Logo.png"   
    alt="logo"
    style={{ width: '80px', height: '80px' }}
  />
  <h1 style={{ textAlign: 'center' }}>Portfolio</h1>
</div>
<hr />
<nav>
<Link to="/">Home</Link> | <Link to="/about">About Me</Link> | <Link
to="/education">Education</Link> | <Link to="/project">Project</Link> | <Link 
to="/services">Services</Link> | <Link to="/contact">Contact Me</Link>
</nav>

</>
);
}