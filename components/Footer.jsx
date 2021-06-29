import React from 'react'

export default function Footer() {
    return (
        <div>
            <footer className="hidden md:flex bg-white flex-col -m-2 md:-m-28 font-bold text-xl">
                <ul className="absolute right-0 mx-16 my-4 text-base">
                    <h1 className="m-2 text-2xl uppercase text-gray-600">Quick links</h1>
                    <li className="m-2 hover:text-teal">
                        <a href="https://discord.gg/hPuJf9vzkn">Discord</a>
                    </li>
                    <li className="m-2 hover:text-teal">
                        <a href="https://github.com/Izarothy/meme-library">Github</a>
                    </li>
                    <li className="m-2 mb-5 hover:text-teal">
                        <a href="https://www.linkedin.com/in/izaroth-izaroth-870323185/">LinkedIn</a>
                    </li>
                </ul>
            </footer>
        </div>
    )
}
