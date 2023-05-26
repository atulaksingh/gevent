import React from "react";
import Image from "next/image";
import { MdDateRange, MdModeComment } from "react-icons/md";
// import { MdModeComment} from 'react-icons/md';
function Blog() {
  return (
    <div className="bg-black text-white border-t-2 border-white py-16 lg:py-28 font-[Syne]">
      <div className="container m-auto">
        <div className="grid grid-cols-12 sm:gap-5 mx-5">
          <div
            data-aos="fade-right"
            //  data-aos-anchor="#example-anchor"
            data-aos-offset="120"
            data-aos-duration="1000"
            className="col-span-12 lg:col-span-7 mx-3 md:mx-0 lg:order-none border border-[#DF2844] "
          >
            <div
              data-aos="fade-right"
              //  data-aos-anchor="#example-anchor"
              data-aos-offset="120"
              data-aos-duration="1000"
              className="  relative top-16 right-3 md:right-5 lg:right-11 grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <div className="col-span-1 border-2 border-white bg-black  md:ml-0">
             
                <div className=" ">
                  <img
                    src={
                      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1680327803/337880692_584817700256499_6722698848955823234_n_mpfhso.jpg"
                    }
                    alt="Movie"
                    className="w-full h-48  lg:h-52 bg-contain "
                  />
                </div>
                <div className="mx-5">
                  <div className="text-2xl py-5">
                  Kailash Kher, to Pune City for an upcoming event you won&lsquo;t want to miss

                  </div>
                  <div className="flex justify-start gap-11 text-[#DF2844]">
                    <div className="flex gap-2">
                      <div className="">
                        <MdDateRange size={25} color="#DF2844" />
                      </div>
                      <div className="my-auto text-lg">
                        {" "}
                        <span> April 22</span>,<span>2022</span>
                      </div>
                    </div>
                    <div className="flex gap-2 text-[#DF2844]">
                      <div className="">
                        <MdModeComment size={20} />
                      </div>
                      <div className="my-auto">0</div>
                    </div>
                  </div>
                  <div className="text-base text-[ Syne] text-gray-300 my-4 line-clamp-4 leading-6">
                  Join us as we welcome another legendary performer&lsquo; Kailash Kher, to Pune City for an upcoming event you won&lsquo;t want to miss. Get ready to be mesmerized by his soulful voice and unforgettable performances, only with Panache Media
                  {/* `'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`. */}
                  </div>
                  <div className="flex gap-3 pb-7">
                    <div className="my-auto font-bold text-base text-gray-300 font-[Syne] cursor-pointer hover:text-[#DF2844]">
                      READ MORE
                    </div>
                    <div className="w-4 h-4 stroke-[#DF2844]   my-auto  ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 14 13"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 11.5l5-5-5-5M1 11.5l5-5-5-5"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-1 border-2 border-white bg-black ">
      
                <div className="w-full ">
                  <img
                    src={
                      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1680327862/333790480_125114907162192_8391326631875087038_n_vw6rgw.jpg"
                    }
                    alt="Movie"
                    className="w-full h-48  lg:h-52 bg-contain rounded-xl"
                  />
                </div>
                <div className="mx-5">
                  <div className="text-2xl py-5">
                  Indore Ready to witness this Amazing performance  
                  </div>
                  <div className="flex justify-start gap-11 text-[#DF2844]">
                    <div className="flex gap-2">
                      <div className="">
                        <MdDateRange size={25} color="#DF2844" />
                      </div>
                      <div className="my-auto text-lg">
                        {" "}
                        <span>March 3</span>,<span>2023</span>
                      </div>
                    </div>
                    <div className="flex gap-2 text-[#DF2844]">
                      <div className="">
                        <MdModeComment size={20} />
                      </div>
                      <div className="my-auto">0</div>
                    </div>
                  </div>
                  <div className="text-base text-[ Syne] text-gray-300 my-4 line-clamp-4">
                  Get ready to witness an amazing performance in Indore! Our upcoming event is set to blow your mind with an unforgettable show that you won&lsquo;t want to miss. Join us for an evening of entertainment, collaboration with celebrities, and superstars, all brought to you by Panache Media.
                  </div>
                  <div className="flex gap-3 pb-7">
                    <div className="my-auto font-bold text-base text-gray-300 font-[Syne] cursor-pointer hover:text-[#DF2844]">
                      READ MORE
                    </div>
                    <div className="w-4 h-4 stroke-[#DF2844]   my-auto  ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 14 13"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 11.5l5-5-5-5M1 11.5l5-5-5-5"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-5 sm:mt-0 mt-14">
            <div className="col-span-1 py-9 md:mx-10">
              <div className="text-[#DF2844] mb-5 m-auto font-[Syne] text-lg font-bold md:space-x-20 md:tracking-widest">
                BLOG
              </div>
              <h1 className="text-[30px] sm:text-[50px] md:text-[59px] w-full font-bold ">
              Upcoming shows
              </h1>
              <div className="text-base text-gray-300 font-medium mt-1  line-clamp-4 leading-7 ">
              Stay tuned for our upcoming shows, featuring top celebrities, supermodels, music and sport superstars, and exciting performances, all crafted to deliver unforgettable experiences that you won&lsquo;t want to miss! At Panache Media, we&lsquo;re constantly pushing the boundaries of event management to bring you the best shows possible.

              </div>

              <div className="py-10">
                <button
                  data-aos="fade-up"
                  data-aos-once="false"
                  data-aos-duration="1000"
                  className=" px-6 py-3 text-bold hover:text-[#DF2844] tracking-[2px] border border-[#DF2844] font-[Syne]"
                >
                  VIEW ALL
                </button>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
