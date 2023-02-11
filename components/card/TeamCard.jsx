import React from "react";
import Image from "next/image";
function TeamCard(props) {
  return (
    <>
      <div>
  
   
{
    props.data.map((item,index)=>(

        <div data-aos-offset="300"  data-aos="fade-up"  data-aos-once="false"
     data-aos-duration="1000" key={index
        } className="col-span-1 border border-indigo-600">
          <div className="relative right-7 top-10 h-96 w-full border border-red-600">
            <Image
              src={
               item.img
              }
              layout="fill"
              objectFit="cover"
              className="h-fit w-fit"
              alt="team Img"
            />
          </div>
        </div>
    ))
}
   
      </div>
    </>
  );
}

export default TeamCard;
