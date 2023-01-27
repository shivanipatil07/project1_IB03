import React, { useState } from 'react'

 function LandPage() {
    let [data, newData] = useState(4)

    function updated(){
        newData(data+2)
    }
  return (
    <div className='main'>
        <h2>{data}</h2>
        <button onClick={updated}>add to cart</button>
    </div>
  )
}
export default LandPage;