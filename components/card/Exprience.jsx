import React from 'react'
// const imgstyle = {
//   backgroundImage:
//     "url(https://res.cloudinary.com/dt0j68vdr/image/upload/v1675667922/concert-audience-PG2VFZFa_qxrj6o.webp)",
//     height: '130vh',
//   width: '98.7vw',
//   backgroundSize: 'cover',
//   backgroundRepeat: 'no-repeat',
//   backgroundAttachment: 'fixed',
//   backgroundPosition: 'center'
  
// };
function Exprience(props) {
  return (
  <>
<div class="bg-fixed w-full lg:h-92 bg-no-repeat bg-cover bg-top "
 style={{backgroundImage: 'url(https://res.cloudinary.com/dt0j68vdr/image/upload/v1675667922/concert-audience-PG2VFZFa_qxrj6o.webp)'}}>
      <div className=" flex flex-wrap gap-10 justify-center py-20">
        <div className=" text-white w-[290px] border-2 border-white py-10">
          <h1 className="flex  justify-center">
            <span className="text-[50px] text-[#D7F205] font-bold">172</span> <span className='font-black'>TH</span>
          </h1>
          <div className="text-lg text-center font-bold">Years Of Experience</div>
        </div>
        <div className=" text-white w-[290px] border-2 border-white py-10">
          <h1 className="flex  justify-center">
            <span className="text-[50px] text-[#D7F205] font-bold">15</span> <span className='font-black'>TH</span>
          </h1>
          <div className="text-lg text-center font-bold">Years Of Experience</div>
        </div>
        <div className=" text-white w-[290px] border-2 border-white py-10">
          <h1 className="flex  justify-center">
            <span className="text-[50px] text-[#D7F205] font-bold">250</span> <span className='font-black'>TH</span>
          </h1>
          <div className="text-lg text-center font-bold">Years Of Experience</div>
        </div>
        <div className=" text-white w-[290px] border-2 border-white py-10">
          <h1 className="flex  justify-center">
            <span className="text-[50px] text-[#D7F205] font-bold">80</span> <span className='font-black'>TH</span>
          </h1>
          <div className="text-lg text-center font-bold">Years Of Experience</div>
        </div>
      </div>
      </div>
  </>
  )
}

export default Exprience
