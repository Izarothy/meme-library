import Head from 'next/head'
import Meme from '../components/Meme.jsx'
import NavBar from '../components/NavBar.jsx'
import Footer from '../components/Footer.jsx'
import {useState, useEffect, useMemo} from 'react';

export default function Home() {
  const [memeList, setMemeList] = useState([])
  const [searchValue, setSearchValue] = useState('')

  // A function to fetch an array of meme objects from the API
  const fetchMemes = async () => {
    try {
    const res = await fetch('https://meme-library.vercel.app')
    return res.json(); }
  catch (err) {
    console.log(err); } 
}


  //Fetch on render
  useEffect (() => {
    fetchMemes().then(data => {
      setMemeList(data)
    })
  }, [])

  const filteredMemeList = useMemo(() => {
    if (memeList) {
    return memeList.filter((meme) => {
      return meme.title.toLowerCase().includes(searchValue.toLowerCase());
    })
  }
  }, [memeList, searchValue])

  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet"/>
        <title>Meme library</title>
        {/* Og tags to display an embed on discord when sent */}
        <meta property="og:title" content="Meme library" />
        <meta property="og:image" content="https://cdn.wallpapersafari.com/97/43/T2HJdw.jpg" />
        <meta property="og:url" content="https://meme-library.vercel.app" />
        <meta property="og:description" content="A website to keep track of discord-sent memes" />
      </Head>
      <NavBar />
      <main className="min-h-screen p-2 md:p-28 font-montserrat box-border bg-bgimage bg-fixed">
        <section className="min-h-screen p-6 md:p-12 md:mb-32 flex flex-col">
          <h1 className="text-center text-white text-6xl mb-6 font-bold after:">Meme library</h1>
          <div className="self-center flex items-center">
            <form onSubmit={e => e.preventDefault()}>
              {/* An input to search through the meme base */}
              <input type="text" onChange={(e) => {setSearchValue(e.target.value)}} value={searchValue} placeholder="Search..." className="w-100 block bg-gray-800 px-5 py-3 text-xl rounded-lg mb-4 text-white hover:bg-gray-600 focus:appearance-none focus:outline-none" autoComplete="off"/>
            </form>
          </div>
          <div className="grid grid-cols-2 gap-y-2 md:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-8">
            {/* Map through the new array to render Meme components if the array isn't empty */}
            {memeList ? filteredMemeList.map((meme, idx) => <Meme image={meme.url} title={meme.title} key={idx} />) : <h1 className="text-center text-white text-3xl">No memes found</h1>}
          </div>
        </section>
        <Footer />
      </main>
    </div>
  )
}