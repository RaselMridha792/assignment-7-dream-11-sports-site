import { useEffect, useState } from "react";
import Card from "./Card";
const Player = () => {
    const [players, setPlayer] = useState([]);
    useEffect(()=>{
        const loadData = async()=>{
            const response = await fetch('../../public/playerData.json');
            const data = await response.json();
            setPlayer(data)
        }
        loadData()
    },[])
    
    return (
        <>
        <div className="flex justify-between">
            <h1 className="text-2xl font-bold">Available Players</h1>
            <div className="flex gap-5 border rounded-xl pr-5 font-bold">
                <button className="btn btn-main">Available</button>
                <button className="text-gray-500">Selected(0)</button>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10">
            {
                players.map(player =><Card key={player.playerId} player={player}></Card>)
            }
        </div>
        </>
    );
};

export default Player;