import React from 'react';
import { AiOutlineInstagram, AiOutlineFacebook, AiOutlineLinkedin } from 'react-icons/ai';

const Footer = () => {
  const year = new Date().getFullYear(); 
  return (
    <div className='footer-container'>
      <p>{year} FD Eletronics - All Rights Reserved</p>
      <p className="icons">
        <AiOutlineInstagram />
        <AiOutlineFacebook />
        <AiOutlineLinkedin />
      </p>
    </div>
  )
}

export default Footer;