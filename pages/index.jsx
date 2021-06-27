import Head from 'next/head'
import Meme from '../components/Meme.jsx'
import {useEffect, useState} from 'react';


export default function Home() {
  const [stuff, setStuff] = useState([])
  const apiFetch = async () => {
    return fetch('https://meme-library.vercel.app/api/memes')
      .then((res) => res.json())
  }

  apiFetch().then(data => {
    setStuff(data)
  })
  
  return (
    <div>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet"/>
    </Head>
    <main className="min-h-screen p-6 md:p-28 bg-bg-pattern bg-fixed font-montserrat box-border">
      <Head>
        <title>Meme library</title>
      </Head>
      <div className="bg-white min-h-screen p-6 md:p-12 rounded-lg bg-opacity-80">
      <h1 className="text-center text-5xl mb-6 font-bold after:">Meme library</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-6 md:gap-2">
        {stuff ? stuff.map((meme, idx) => <Meme className="opacity-100" image={meme.url} title={meme.title} key={idx} />) : <h1>"No memes"</h1>}
      </div>
      </div>

    </main>
    </div>
  )
}
