import PropTypes from "prop-types";
import { RiDeleteBin2Line } from "react-icons/ri";
const SelectedPlayer = ({ getPlayer, removePlayer, handleAddMorePlayer }) => {
  // console.log(getPlayer)
  return (
    <>
      <div className="py-20 flex flex-col gap-5">
        {getPlayer.map((playerData) => (
          <div
            key={playerData.playerId}
            className="border rounded-xl px-5 md:px-10 py-5 flex justify-between"
          >
            <div className="flex items-center gap-5">
              <img
                className="w-20 h-20 object-cover rounded-full"
                src={playerData.image}
                alt=""
              />
              <div className="">
                <h1 className="md:text-2xl font-bold">
                  hello{playerData.name}
                </h1>
                <p>{playerData.battingType} {playerData.role}</p>
              </div>
            </div>
            <button onClick={() => removePlayer(playerData.playerId)}>
              <RiDeleteBin2Line className="text-3xl text-red-500" />
            </button>
          </div>
        ))}
      <button onClick={()=>handleAddMorePlayer('Available')} className="btn btn-main w-1/5">add more player</button>
      </div>
    </>
  );
};

SelectedPlayer.propTypes = {
  getPlayer: PropTypes.array,
  removePlayer: PropTypes.func,
  handleAddMorePlayer: PropTypes.func
};
export default SelectedPlayer;

// {
//     "playerId": 16,
//     "name": "Mizanur Rahman",
//     "country": "Bangladesh",
//     "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN5Avx-rBSngf29EBgN1XFLRHPvNapdkoY3Q&s",
//     "role": "Batsman",
//     "battingType": "Right-handed",
//     "bowlingType": "Right-arm medium",
//     "biddingPriceBPL": "$65000"
// }
