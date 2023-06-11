import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

const contact = () => {
  return (
    <div>
      <Header />
      <div className='text-center mt-14 text-3xl font-bold'>Contact Us</div>
      <section className="text-gray-600 body-font relative">
  <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 div-10 flex items-end justify-start relative">
      <iframe width="100%" height="100%" className="absolute inset-0" frameborder="0" title="map" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" ></iframe>
      <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
        <div className="lg:w-1/2 px-6">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
          <div className="mt-1">Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter</div>
        </div>
        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
          <a className="text-indigo-500 leading-relaxed">example@email.com</a>
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
          <div className="leading-relaxed">123-456-7890</div>
        </div>
      </div>
    </div>
    <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
      <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Contact Us</h2>
      <div className="leading-relaxed mb-5 text-gray-600">You can Contact us via phone number or mail. We will respond you as soon as possible.</div>
      {/* start */}
      <section class="text-gray-600 body-font">
  <div class="container  px-5 py-24 mx-auto">
    
    <div class=" -m-2">
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-gray-200 border md:w-max p-4 rounded-lg">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80"/>
          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium">Jenishbhai Koladiya</h2>
            <p class="text-gray-500">CEO</p>
          </div>
        </div>
      </div>
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-gray-200 border md:w-max p-4 rounded-lg">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/84x84"/>
          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium">Bharatbhai Koladiya</h2>
            <p class="text-gray-500">FOUNDER</p>
          </div>
        </div>
      </div>
      
      
      
      
      
      
    </div>
  </div>
</section>
      {/* end */}
      <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
      <div className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</div>
    </div>
  </div>
</section>
<Footer />
    </div>
  )
}

export default contact