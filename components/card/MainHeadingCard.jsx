import React from 'react'

function MainHeadingCard(props) {
  return (
    <div>
       <div
        class="bg-fixed w-full lg:h-92 bg-no-repeat bg-cover bg-top "
        style={{
          backgroundImage:
            "url(https://res.cloudinary.com/dt0j68vdr/image/upload/v1675667922/concert-audience-PG2VFZFa_qxrj6o.webp)",
        }}
      >
       
       <div className=" text-white ">
         <div>
           <div className="text-center py-40">
             <div className="text-[60px] font-bold font-[Syne]">{props.title}</div>
             <div className="text-lg">
               Home/<span className="text-[#D7F205] font-[Syne]">{props.page}</span>
             </div>
           </div>
         </div>
       </div>
       </div>
    </div>
  )
}

export default MainHeadingCard
