import React from 'react'
import Image from 'next/image'
export default function Meme(props) {
    return (
        <div className="h:full md:h-64 text-center hover:border flex flex-col items-center shadow-3xl">
            <a target="_blank" href={props.image}><Image height="170" width="200" className="rounded-sm" src={props.image} alt="A meme" /></a>
            <div className="bg-white w-full h-full">
                <h1 className="font-bold text-black text-lg text-center w-full my-6">{props.title}</h1>
            </div>
        </div>
    )
}
