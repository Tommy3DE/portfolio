import React from 'react'

const Footer = () => {
  return (
    <div name='kontakt' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p4'>
        <div className='flex flex-col max-w-[600px] w-full'>
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-white text-gray-400">Kontakt</p>
                <p className="text-gray-400 py-8 text-2xl">Mail: <a className='text-white' href='mailto:tomasz2108@gmail.com?subject=Mail dotyczący Portfolio'>tomasz2108@gmail.com</a></p>
                <p className="text-gray-400 py-8 text-2xl">Telefon:  <span className='text-white'>518 741 779</span></p>
            </div>
        </div>
    </div>
  )
}

export default Footer