import Image from 'next/image'
import React from 'react'
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserIcon,
  UserCircleIcon,
  AcademicCapIcon
} from '@heroicons/react/solid'

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 md:px-10">
      {/* Left */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          alt=""
        ></Image>
      </div>

      {/* Middle - Search */}
      <div className="flex justify-between items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          className=" pl-5 bg-transparent w-5/6 border-none outline-none text-gray-600 focus:ring-0"
          type="text"
          placeholder="Hello"
        ></input>
        <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer mx-auto md:mx-2" />
      </div>

      {/* Right - User Menu */}
      <div className="flex items-center justify-end space-x-4 text-gray-400">
        <p className="hidden cursor-pointer lg:inline-flex">Become a host</p>
        <GlobeAltIcon className="h-6" />
        <div className="flex items-center space-x-2 border-2 rounded-full p-2">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  )
}

export default Header
