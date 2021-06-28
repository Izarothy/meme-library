import Head from 'next/head'
import Meme from '../components/Meme.jsx'
import NavBar from '../components/NavBar.jsx'
import {useState, useEffect, useMemo} from 'react';

export default function Home() {
  const [memeList, setMemeList] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const apiFetch = async () => {
    return fetch('https://meme-library.vercel.app/api/memes')
      .then((res) => res.json())
  }

  useEffect (() => {
    apiFetch().then(data => {
      setMemeList(data)
    })
  }, [])

  //TODO admin panel (to delete)
  //TODO Mobile hamburger navbar

  const filteredMemeList = useMemo(() => {
    return memeList.filter((meme) => {
      return meme.title.toLowerCase().includes(searchValue.toLowerCase());
    })
  }, [memeList, searchValue])

  return (
    <div>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet"/>
    </Head>
      <Head>
        <title>Meme library</title>
        <meta property="og:title" content="Meme library" />
        <meta property="og:image" content="https://cdn.wallpapersafari.com/97/43/T2HJdw.jpg" />
        <meta property="og:url" content="https://meme-library.vercel.app" />
        <meta property="og:description" content="A website to keep track of discord-sent memes" />
      </Head>
      <NavBar />
      <main className="min-h-screen p-2 md:p-28 font-montserrat box-border bg-bgimage bg-fixed">

      <div className="min-h-screen p-6 md:p-12 flex flex-col">
      <h1 className="text-center text-black text-6xl mb-6 font-bold after:">Meme library</h1>
      <div className="self-center flex items-center">
        <form>
          <input type="text" onChange={(e) => {setSearchValue(e.target.value)}} value={searchValue} placeholder="Search..." className="w-100 block bg-gray-800 px-5 py-3 text-xl rounded-lg mb-4 text-white hover:bg-gray-600 focus:appearance-none focus:outline-none" autoComplete="off"/>
        </form>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-6 md:gap-2">
        {memeList ? filteredMemeList.map((meme, idx) => <Meme image={meme.url} title={meme.title} key={idx} />) : <h1>"No memes"</h1>}
      </div>
      </div>
      </main>
    </div>
  )
}