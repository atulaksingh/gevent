import React from "react";

function multipage() {
  return (
    <>
      <div className="text-white">
        <div className="py-20 mx-10">
          <div className="text-[24px] font-[500] my-3">ELEANOR & STEFANO</div>
          <div className="grid grid-cols-3 gap-10">
            <div className="col-span-2">
              <h1 className="text-[17px] fonr-[500] leading-[1.5em]">
                Quality vestibulum mollis accumsan ultricies. Sed urna velit,
                maximus eu tellus sit amet, condimentum dictum erat. Sed dolor
                ipsum, luctus quis est eu, vestibulum tincidunt est. Donec
                egestas aliquet nunc, ac egestas sapien fermentum in. Sed
                volutpat ac mi faucibus convallis. Praesent facilisis lobortis
                tellus. Donec laoreet, erat in sagittis dictum, enim enim
                dignissim sapien.
              </h1>
            </div>
            <div className="col-span-1">
              <h1>Wedding Planner : Rachel Starletta</h1>
              <h1>Wedding Photographer : Janet</h1>
              <h1>Lewis Location : Lakewood WA, USA</h1>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-10 py-10">
            <div className="col-span-1">
              <div className="relative group">
                <img
                  src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1680327442/48260275_1767710546667709_6424977874578571264_n_1_vnyfqx.jpg"
                  alt="Image"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-75 transition-opacity">
                  {/* Additional content or styling for the hover effect */}
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="relative group">
                <img
                  src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1680327442/48260275_1767710546667709_6424977874578571264_n_1_vnyfqx.jpg"
                  alt="Image"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-75 transition-opacity">
                  {/* Additional content or styling for the hover effect */}
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="relative group">
                <img
                  src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1680327442/48260275_1767710546667709_6424977874578571264_n_1_vnyfqx.jpg"
                  alt="Image"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-75 transition-opacity">
                  {/* Additional content or styling for the hover effect */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default multipage;
