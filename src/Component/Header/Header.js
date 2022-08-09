
import React from 'react'
import {Link} from 'react-router-dom'


export default function Header() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg  navbar-dark navbarbg">
  <div class="container">
    <Link class="navbar-brand" to="/">iDocx</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/About">About</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Service">Service</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Contact">Contact</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Signup">Signup</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Portfolio">Portfolio</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    
    
   
    </div>
    
  );
}
