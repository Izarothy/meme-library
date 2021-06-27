import React from 'react'

export default function Meme(props) {
    return (
        <div className="borderborder-md shadow-md rounded-lg p-2 h-64 text-center hover:border flex flex-col items-center">
            <a target="_blank" href={props.image}> <img className="h-52 w-52 mb-2 rounded-lg" src={props.image} alt="A meme" /></a>
            <h1 className="font-bold text-black text-lg text-center">{props.title}</h1>
        </div>
    )
}
