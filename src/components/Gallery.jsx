import Image from 'next/image';
import React from 'react';

const Gallery = () => {
  return (
    <div>
      <hr />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex w-full mb-20 flex-wrap">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">This is our last working sites.</h1>
            <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">Here by with the help of enlisted images you can see how to make our clients happy with their recommendation as well as our work efficiency.</p>
          </div>
          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2">
                <Image alt="gallery" className="w-full object-cover h-full object-center block  transition duration-300 hover:scale-95 hover:shadow-2xl" src="https://dummyimage.com/500x300" width={500} height={300} />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <Image alt="gallery" className="w-full object-cover h-full object-center block transition duration-300 hover:scale-95 hover:shadow-2xl" src="https://dummyimage.com/501x301" width={501} height={301} />
              </div>
              <div className="md:p-2 p-1 w-full">
                <Image alt="gallery" className="w-full h-full object-cover object-center block transition duration-300 hover:scale-95 hover:shadow-2xl" src="https://dummyimage.com/600x360" width={600} height={360} />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full">
                <Image alt="gallery" className="w-full h-full object-cover object-center block transition duration-300 hover:scale-95 hover:shadow-2xl" src="https://dummyimage.com/601x361" width={601} height={361} />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <Image alt="gallery" className="w-full object-cover h-full object-center block transition duration-300 hover:scale-95 hover:shadow-2xl" src="https://dummyimage.com/502x302" width={502} height={302} />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <Image alt="gallery" className="w-full object-cover h-full object-center block transition duration-300 hover:scale-95 hover:shadow-2xl" src="https://dummyimage.com/503x303" width={503} height={303} />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <Image alt="gallery" className="w-full object-cover h-full object-center block transition duration-300 hover:scale-95 hover:shadow-2xl" src="https://dummyimage.com/503x303" width={503} height={303} />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <Image alt="gallery" className="w-full object-cover h-full object-center block transition duration-300 hover:scale-95 hover:shadow-2xl" src="https://dummyimage.com/503x303" width={503} height={303} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
