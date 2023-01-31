import React from 'react'
import './Headline.css'
import { AiOutlineArrowRight} from "react-icons/ai";
import Head1 from '../../Assets/H1.jpg'
import Head2 from '../../Assets/H1.jpg'
import Head3 from '../../Assets/H2.jpeg'
export default function Headline() {
  return (
    <div className='head'>

      <div className='div-1'>
        <div className='img-1' data-aos="fade-right">
        <img src={Head1} alt="img"  />
          <h1></h1>
        </div>

        <div className='img-3'data-aos="fade-up-left">
        <img src={Head2} alt="img2" />
          <h1></h1>
        </div>

        <div className='img-2' data-aos="flip-right" data-aos-duration="1000">
        <img src={Head3} alt="img2"   />
          <h1></h1>
        </div>

      </div>


      <div className='div-2'>
        <h1>Headline of temple </h1>
        {/* <div class="vl-2"></div> */}
        <p>It is a long established fact that a reader will be
          distracted by the readable content of a page when
          looking at its layout. The point of using Lorem Ipsum is
          that it has a more-or-less normal distribution of letters,
          as opposed to using 'Content here, content here',</p>
          <button className='bton'>Learn More <AiOutlineArrowRight/></button>
        
        {/* <button className='B'>Learn More --</button> */}
      </div>
    </div>

  )
}
