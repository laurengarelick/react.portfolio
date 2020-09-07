import React from 'react';
import { useLocation } from 'react-router-dom';

import {Navbar} from './style';

const Navbar = ({ user }) => {
    const location = useLocation();
  
    return (
        <h1 class="float-left">
            <ul class="nav">
                <li class="nav-item">
                <a class="nav-link active" href="#">Lauren Garelick</a>
            </ul>
        </h1>
        <h3 class="float-right">
          <div style="clear: both"></div>
            <ul class="nav justify-content-end">
            <li class="nav-item">
              <a class="nav-link active" href="index.html">about</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="portfolio.html">portfolio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="contact.html"><strong>contact</strong></a>
            </li>
        </ul>
        </h3>
    
  
  export default Navbar
  import Container from 'react-boostrap/Container'