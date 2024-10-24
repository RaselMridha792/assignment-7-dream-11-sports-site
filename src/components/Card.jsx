import PropTypes from "prop-types";
import { FaUserTie } from "react-icons/fa6";
import { IoFlagSharp } from "react-icons/io5";
const Card = ({ player }) => {
  const {
    playerId,
    name,
    country,
    image,
    role,
    battingType,
    bowlingType,
    biddingPriceBPL,
  } = player;
  console.log(player);
  return (
    <>
      <div className="card card-compact bg-base-100 shadow-xl p-3 border">
        <figure>
          <img className="w-full h-72 object-cover" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            <FaUserTie className="rounded-xl text-2xl" /> {name}
          </h2>
          <div className="flex justify-between">
            <div className="flex gap-2 items-center text-lg text-gray-500">
              <IoFlagSharp />
              <p>{country}</p>
            </div>
            <div>
              <p className="bg-stone-200 py-2 px-4 rounded-lg text-sm">{role}</p>
            </div>
          </div>
          <hr className="my-3" />
          <div className="flex justify-between w-full font-bold">
            <div className="w-2/4">
              <p className="text-xl">rating</p>
              <p className="py-3">{battingType}</p>
              <p>Price: {biddingPriceBPL}</p>
            </div>
            <div className="text-end">
              <p className="text-gray-500 py-3">{bowlingType}</p>
              <button className="btn btn-outline hover:bg-[#E7FE29] hover:text-black">Choose Player</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Card.propTypes = {
  player: PropTypes.object.isRequired,
};
export default Card;

// {
//     "playerId": 1,
//     "name": "Shakib Al Hasan",
//     "country": "Bangladesh",
//     "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgW6W359fp18YwF9EspdR4c0Gln6vi1CvbpQ&s",
//     "role": "All-rounder",
//     "battingType": "Left-handed",
//     "bowlingType": "Slow left-arm orthodox",
//     "biddingPriceBPL": "$200,000"
// }
