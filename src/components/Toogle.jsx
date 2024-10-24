import PropTypes from "prop-types";
const Toogle = ({handleToggle, getPlayer}) => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between">
        <h1 className="text-2xl font-bold">Available Players({getPlayer.length}/6)</h1>
        <div className="flex gap-5 md:border rounded-xl pr-5 font-bold">
          <button onClick={()=>handleToggle('Available')} className="btn btn-main">
            Available
          </button>
          <button onClick={()=>handleToggle('selected')} className="text-gray-500">Selected(0)</button>
        </div>
      </div>
      <div>
      </div>
    </>
  );
};

Toogle.propTypes = {
    handleToggle: PropTypes.func,
    getPlayer: PropTypes.array
}

export default Toogle;
