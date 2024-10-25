import { useState } from "react"
import Footer from "./components/footer/Footer"
import Banner from "./components/header/Banner"
import Navbar from "./components/header/Navbar"
import Player from "./components/Player"
import Toogle from "./components/Toogle"
import SelectedPlayer from "./components/selected/SelectedPlayer"

function App() {
  const [tooglebtn, setTooglebtn] = useState('Available');
  const [getPlayer, setGetPlayer] = useState([])


  const handleToggle = (toogle) =>{
    setTooglebtn(toogle);
  }

  const handleSelectPlayer = (player) =>{
    if(getPlayer.length < 6){
      console.log(getPlayer.length)
      const playerIds = player.playerId
      const isExist = getPlayer.find(existingPlayer => existingPlayer.playerId === playerIds);
      if(isExist){
        alert('already exist')
      }
      else{
        const newPlayer = [...getPlayer, player]
        setGetPlayer(newPlayer)
      }
    }
    else{
      alert('max player existing queue')
    }
  }


  // for remove item by clicking btn  
  const removePlayer = (id) =>{
    const removalId = getPlayer.filter(removePlayer => removePlayer.playerId !== id)
    setGetPlayer(removalId);
  }

  return (
    <>
    <main className="max-w-screen-2xl mx-auto px-5">
      <header>
        <Navbar></Navbar>
        <Banner></Banner>
      </header>
      <Toogle handleToggle={handleToggle} getPlayer={getPlayer}></Toogle>
      {
        (tooglebtn === 'Available')&&<Player handleSelectPlayer={handleSelectPlayer}></Player>
      }
            {
        (tooglebtn === 'selected')&& <SelectedPlayer getPlayer={getPlayer} removePlayer={removePlayer}></SelectedPlayer>
      }       
    </main>
    <Footer></Footer>
    </>
  )
}

export default App
