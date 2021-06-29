import React from 'react'

export default function Meme(props) {
    return (
        <div className="h:full md:h-64 text-center hover:border flex flex-col items-center shadow-3xl">
            <a target="_blank" href={props.image}> <h1></h1><img className="h-36 md:h-52 w-full rounded-sm" src={props.image} alt="A meme"/></a>
            <div className="bg-white w-full h-full">
                <h1 className="font-bold text-black text-lg text-center w-full my-4">{props.title}</h1>
            </div>
        </div>
    )
}
