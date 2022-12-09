import { useEffect, useState } from 'react'
import TopBar from '../components/TopBar/TopBar'
import Home from '../pages/Home/Home'
import { movieContext } from '../movieContext'
import './App.css'

function App() {
  
  const [movieListOne, setMovieListOne] = useState([])
  const [movieListTwo, setMovieListTwo] = useState([])

  useEffect(()=>{
    getMovieCategory1()
    getMovieCategory2()
  },[])

  
  // const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=5a01d966'
  const category1 = 'action'
  const category2 = 'comedy'
  const firstUrl = `http://www.omdbapi.com/?s=${category1}&apikey=5a01d966`
  const secondUrl = `http://www.omdbapi.com/?s=${category2}&apikey=5a01d966`
  
  const getMovieCategory1 = async () => {
    let res = await fetch(firstUrl)
    let data = await res.json()
    // console.log(data.Search)
    setMovieListOne(data.Search)
  }
  const getMovieCategory2 = async () => {
    let res = await fetch(secondUrl)
    let data = await res.json()
    setMovieListTwo(data.Search)
  }

  return (
    <movieContext.Provider value={{ movieListOne, movieListTwo }}>
      <div className="App">
        <nav>
          <TopBar />
        </nav>
        <section>
          <Home />
        </section>
      </div>
    </movieContext.Provider>
  )
}

export default App
