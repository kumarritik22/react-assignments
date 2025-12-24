import React from 'react'
import coatImage from "../assets/coat.png";

const About = () => {
  return (
    <div className="w-full mt-3 flex gap-3">
      <div className="w-[50vw] bg-[#1e1e1e] p-10 rounded-2xl">
        <h3 className='text-[#ffffffc3] text-sm font-medium mb-12'>ABOUT</h3>
        <h2 className='text-white text-4xl mb-6'>WHERE FASHION MEETS FREEDOM</h2>
        <div className='text-[#ffffff92] flex gap-10 text-sm'>
            <p>We believe that fashion should be an expression of individuality. We encourage creativity and originality in every item we we offer, presenting customers with exclusive collections from Independent designers. With a commitement to fostering a community of creativity and innovation,</p>
            
            <p>we strive to connect designers with fashion enthusiasts who appreciate the artistry individuality behind each piece. Driven by our dedication to authenticity, we curate each collection with a keen eye for unique designs that inspire confidence and self-expression.
            </p>
        </div>
      </div>
      <div className="w-[50vw] bg-cover bg-center-top rounded-2xl" 
        style={{  backgroundImage: `url(${coatImage})` }}>
     </div>
    </div>
  )
}

export default About
