import Link from 'next/link'
import React from 'react'


const Header = () => {
  return (
    <div>  
    <header className="text-gray-600 body-font md:bg-amber-300 	">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href={`/`} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="ml-3 text-2xl md:text-3xl font-bold text-amber-400 md:text-black">TAPOVAN</span>
        </Link>
          <nav className="md:ml-auto md:mr-auto flex text-lg md:text-xl flex-wrap items-center  justify-center ">
            <Link href={`furniture`}  className="mr-5 hover:text-gray-600 hover:font-bold ">Furniture</Link>
            <Link href={`aluminium`} className="mr-5 hover:text-gray-600 hover:font-bold">Aluminium</Link>
            <Link href={`/`} className="mr-5 hover:text-gray-600 hover:font-bold">Works</Link>
          </nav>
          
        
          
          <Link href={`contact`} className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Contact Us
                {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg> */}
            </Link>


      </div>
    </header>


   

  </div> 
  )
}

export default Header