import React from 'react'

export default function Meme(props) {
    return (
        <div className="h:48 md:h-64 text-center hover:border flex flex-col items-center shadow-3xl mb-4">
            <a target="_blank" href={props.image}> <img className="h:32 md:h-52 md:w-full rounded-sm" src={props.image} alt="A meme" /></a>
            <div className="bg-white w-full">
                <h1 className="font-bold text-black text-lg text-center w-full">{props.title}</h1>
            </div>
        </div>
    )
}
