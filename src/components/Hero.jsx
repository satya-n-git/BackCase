import React, { useState } from "react";

const Hero = () => {
 const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="flex justify-center items-center mt-4 p-10">
      <div className="max-w-3xl h-[800px] w-full ">
        <div className="flex items-center justify-start overflow-x-auto scroll-smooth overflow-y-hidden snap-x snap-mandatory h-full w-full">
          <img
            src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MT223_AV1?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1693248280262"
            className="h-full w-full object-cover snap-center"
          />
          <img
            src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MT223_AV3?wid=2000&hei=2000&fmt=jpeg&qlt=90&.v=1693248275090"
            className="h-full w-full object-cover snap-center"
          />
          <img
            src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MT223_AV4?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1694523511603"
            className="h-full w-full object-cover snap-center"
          />
          <img
            src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MT223_AV2?wid=2000&hei=2000&fmt=jpeg&qlt=90&.v=1693248281480"
            className="h-full w-full object-cover snap-center"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
