
const Card = ({props}) => {
  

  return (
    <div className="h-130 w-80 rounded-2xl border-3 border-white overflow-hidden relative">

      {/* Bg-image */}
      <div className="h-full w-full bg-cover bg-center rounded-2xl" 
          style={{ backgroundImage: `url(${props.profileImage})` }}>

            {/* Name and Designation */}
            <h1 className="text-white top-[45%] text-2xl font-medium absolute z-30 p-5">{props.fullName}</h1>
            <h2 className="absolute top-[53%] text-[#ffffffb5] text-sm font-medium z-30 px-5 py-4">{props.designation}</h2>

            {/* Badge */}
          <div className="absolute top-[61%] flex gap-2 z-30 px-5 mt-3">
            <div className=" text-white bg-[#00000086] px-5 py-2 rounded-full text-sm font-medium">{props.badge}</div>
            <div className="text-[#ffffffd7] h-10 w-10 p-2 bg-[#ffffff00] flex items-center justify-center rounded-full border border-[#ffffff8f]">{props.extraBadgeCount}</div>
          </div> 

          {/* Highlight section */}
          <div className="flex text-white gap-10 font-medium absolute top-[70%]  px-10 py-5 z-30">
            <div>
              <h2 className="flex items-center text-lg"> <i className="fa-solid fa-star mr-1"></i><span>{props.rating}</span></h2>
              <p className="text-[#ffffff89]">rating</p>
            </div>
            <div>
              <h2 className="text-lg"> {props.earned}</h2>
              <p className="text-[#ffffff89]">earned</p>
            </div>
            <div>
              <h2 className="text-lg">{props.ratePerHour}</h2>
              <p className="text-[#ffffff89]">rate</p>
            </div>
          </div>

          {/* Button section */}
          <div className="absolute top-[85%] items-center justify-center flex gap-5 mt-3 z-30 px-5">
              <button className="bg-[#ffffff00] border border-[#ffffffaf] text-[#ffffffc5]
                 rounded-full px-5 py-2"><i class="fa-regular fa-bookmark"></i>
              </button>
              <button className="text-black bg-white px-12 py-2 rounded-full font-medium
                 text-lg">Get in Touch
              </button>
          </div>

          {/* Blur effect on card */}
          <div className="absolute bottom-0 w-full h-[60%] bg-cover bg-bottom backdrop-blur-3xl z-10
             bg-black/
             mask-[linear-gradient(to_top,rgba(0,0,0,1),rgba(0,0,0,0))]
             mask-size-[100%_100%]
             mask-no-repeat
             [-webkit-mask-image:linear-gradient(to_top,rgba(0,0,0,1),rgba(0,0,0,0))]
             [-webkit-mask-size:100%_100%]
             [-webkit-mask-repeat:no-repeat]">
          </div>
      </div>
    </div>
  )
}

export default Card

