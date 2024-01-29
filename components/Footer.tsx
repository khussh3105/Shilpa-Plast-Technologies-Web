import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="flexCenter mb-6">
      <div className="max-container flex w-full flex-col gap-6">
        <div className="border bg-gray-20" />
        <p className="regular-14 w-full text-center text-gray-30"> &#169; 2023 <span className='text-red-600 bold-16'>Shilpa Plast Technologies</span>  | All rights reserved | Developed by <Link target='_blank_' href="https://linktr.ee/khussh3105" className='text-blue-800'>Khush Samir Kothari</Link></p>
      </div>
    </footer>
  )
}

export default Footer