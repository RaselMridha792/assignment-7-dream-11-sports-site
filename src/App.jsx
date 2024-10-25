import { useState } from "react"
import Footer from "./components/footer/Footer"
import Banner from "./components/header/Banner"
import Navbar from "./components/header/Navbar"
import Player from "./components/Player"
import Toogle from "./components/Toogle"
import SelectedPlayer from "./components/selected/SelectedPlayer"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [tooglebtn, setTooglebtn] = useState('Available');
  const [getPlayer, setGetPlayer] = useState([]);
  const [credits, setCredits] = useState(0);


  // handle add free credit 
  const handleAddCredit = () =>{
    setCredits(800000 + credits);
    toast.success('Successfully credited')
  }


  const handleToggle = (toogle) =>{
    setTooglebtn(toogle);
  }

  const handleSelectPlayer = (player) =>{
    const playerPrice = player.biddingPriceBPL.slice(1,7)
    if(getPlayer.length < 6){
      const playerIds = player.playerId
      const isExist = getPlayer.find(existingPlayer => existingPlayer.playerId === playerIds);
      if(isExist){
        toast.error('Player already exists!');
      }
      // add condition if playerprice is less than the credits 
      else if(credits< playerPrice){
        toast.error('Not Enough money!')
      }
      else{
        const newPlayer = [...getPlayer, player]
        setGetPlayer(newPlayer)
        setCredits(credits - playerPrice);
      }
    }
    else{
      toast.error('Max players reached!');
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
        <Navbar credits={credits}></Navbar>
        <Banner handleAddCredit={handleAddCredit}></Banner>
        <ToastContainer position="top-center"></ToastContainer>
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
