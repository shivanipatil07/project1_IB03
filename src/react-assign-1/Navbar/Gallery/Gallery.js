import React from 'react'
import './Gallery.css'

export default function Gallery() {
  return (
    <div className='Gallery-main'>
        <h1>Gallery</h1>

        <div className='Gland-page'>

            <div className='G-1'>
              <div className='G-img-1'>
                <h2>Image</h2>
              </div>
              <div className='G-img-2'>
                <h2>Image</h2>
              </div>
            </div>

            <div className='G-2'>
              <div className='G-img-2-2'>
               <h2>Image</h2>
              </div>
            </div>


            <div className='G-3'>
              <div className='G-img-3-1'>
              <h2>Image</h2>
              </div>
              <div className='G-img-3-2'>
              <h2>Image</h2>
                </div>
            </div>
        </div>
    </div>
  )
}
