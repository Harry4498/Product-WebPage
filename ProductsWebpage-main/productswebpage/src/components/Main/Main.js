import React from 'react'
import './Main.css'
import mainImage from "./../../assets/main-image-girl.png"

function Main() {
  return (
    <div className='main-container'>
      <div className='m-c-left-container'>
        <h5>SUMMER 2020</h5>
        <h1 className='main-heading-h1'>NEW COLLECTION</h1>
        <h4>We know how large objects will act, 
but things on a small scale.</h4>
        <button>SHOP NOW</button>
      </div>
      <div className='m-c-right-container'>
        {/* <svg width="501" height="488" viewBox="0 0 501 488" fill="none" xmlns="http://www.w3.org/2000/svg">
           <circle cx="250.42" cy="237.941" r="249.941" fill="white"/>
      </svg> */}

        <img src={mainImage}  />
      </div>
    </div>
  )
}

export default Main