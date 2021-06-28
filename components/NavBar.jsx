import React from 'react'

export default function NavBar() {
    return (
        <div className="">
        <div className="hidden lg:flex lg:justify-between text-lg font-medium lg:border-b-2 lg:border-gray-600 ">
            <div className="flex hover:text-teal my-4 mx-8">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <a href="#" className="text-xl">Main page</a>
            </div>
            <div className="flex ">
            <div className="flex my-4 mx-8">
                <a href="#" className="hover:text-teal">Discord</a>
            </div>
            <div className="flex my-4 mx-8">
                <a href="#" className="hover:text-teal">Github</a>
            </div>
            <div className="flex my-4 mx-8">
                <a href="#" className="hover:text-teal">LinkedIn</a>
            </div>
            </div>
        </div>

        <div className="lg:hidden flex justify-end border-b-2 border-gray-200 w-full">
            <button id="sidebar-open">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            </button>

            <button id="sidebar-close"></button>
        </div>
        </div>
    )
}
