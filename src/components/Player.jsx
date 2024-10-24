import { useEffect, useState } from "react";
import Card from "./Card";
import PropTypes from "prop-types";
// import json from "../../public/playerData.json"
const Player = ({handleSelectPlayer}) => {
    const [players, setPlayer] = useState([]);
    useEffect(()=>{
        const loadData = async()=>{
            const response = await fetch("https://raw.githubusercontent.com/RaselMridha792/pbl-api/refs/heads/main/players.json");
            const data = await response.json();
            setPlayer(data)
        }
        loadData()
    },[])
    
    return (
        <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10 mb-52">
            {
                players.map(player =><Card key={player.playerId} player={player} handleSelectPlayer={handleSelectPlayer}></Card>)
            }
        </div>
        </>
    );
};

Player.propTypes = {
    handleSelectPlayer: PropTypes.func
}

export default Player;