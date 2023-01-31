import React from 'react'
import './Chairperson.css'
import {FaLinkedinIn, FaInstagram,FaTwitter, FaWhatsapp} from "react-icons/fa";
import chair from'../../Assets/chair-person-img.png'


export default function Chairperson() {
  return (
    <div className='chair'>
      <div className='chair-main'>

        <div className='chair-img'>
        <img src={chair} alt="chair"/>
         
           <div className='social-icon'>
            <div className='container'>
                <h3><FaInstagram/></h3>
                <div className='dropdown'>
                  <a href=''><FaLinkedinIn/></a>
                  <a href=''><FaTwitter/></a>
                  <a href=''><FaWhatsapp/></a>
                </div>
            </div>
           </div>
          
      </div>

        <div className='chair-person'>
          <h1>Chair Person</h1>
          <h2>XYZ Person</h2>
          <p>It is a long established fact that a reader will be
            distracted by the readable content of a page
            when looking at itslayout. The point oflike
            readable English. Many desktop publishing
            search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have
            evolved over the years, sometimes by accident,
            sometimes on purpose infancy. Various
            versions have evolved over the years,
            sometimes by accident,sometimes on purpose.</p>
        </div>
      </div>
    </div>
  )
}
