import React from 'react'
import './Gallery.css'
import galimg1 from '../../Assets/gallary-1.jpg'
import galimg2 from '../../Assets/gallary-2.jpg'
import galimg3 from '../../Assets/gallary-3.jpg'
import galimg4 from '../../Assets/gallary-4.jpg'
import galimg5 from '../../Assets/gallary-5.jpg'

export default function Gallery() {
  return (
    <div className='Gallery-main'>
        <h1>Gallery</h1>

        <div className='Gland-page'>

            <div className='G-1'>
              <div className='G-img-1' data-aos="fade-left" data-aos-duration="1000">
              <img src={galimg1} alt="img"/>
              </div>
              <div className='G-img-2' data-aos="fade-right" data-aos-offset="200" data-aos-duration="1000">
              <img src={galimg2} alt="img"/>
              </div>
            </div>

            <div className='G-2' data-aos="zoom-in-up"  data-aos-duration="1000">
              <div className='G-img-2-2'>
              <img src={galimg3} alt="img"/>
              </div>
            </div>


            <div className='G-3'>
              <div className='G-img-3-1' data-aos="fade-right" data-aos-duration="1000">
              <img src={galimg4} alt="img"/>
              </div>
              <div className='G-img-3-2' data-aos="fade-left" data-aos-duration="1000">
              <img src={galimg5} alt="img"/>
                </div>
            </div>
        </div>
    </div>
  )
}
