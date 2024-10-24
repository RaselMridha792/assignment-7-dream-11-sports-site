import Footer from "./components/footer/Footer"
import Banner from "./components/header/Banner"
import Navbar from "./components/header/Navbar"
import Player from "./components/Player"

function App() {

  return (
    <>
    <main className="max-w-screen-2xl mx-auto px-5">
      <header>
        <Navbar></Navbar>
        <Banner></Banner>
        <Player></Player>
      </header>
    </main>
    <Footer></Footer>
    </>
  )
}

export default App
