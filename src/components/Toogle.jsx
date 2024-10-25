import PropTypes from "prop-types";
import { useEffect, useState } from "react";
const Toogle = ({handleToggle, getPlayer, resetColor}) => {
  const [activeState, setActiveState] = useState(1);
  const [secondActive, setSecondActive] = useState(1);

  const handleisActiveCondition = (ids) =>{
    setActiveState(ids)
    handleToggle('Available')
    setSecondActive(1)
  }

  const handleSecondBtn = (ids) =>{
    handleToggle('selected')
    setSecondActive(ids)
    setActiveState(2)

  }
  useEffect(()=>{
    console.log(resetColor)
    if(resetColor){
      setSecondActive(1)
      setActiveState(1)
    }
  }, [resetColor])

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between">
        <h1 className="text-2xl font-bold">Available Players({getPlayer.length}/6)</h1>
        <div className="flex gap-5 md:border rounded-xl font-bold">
          <button id="availableBtn" onClick={()=>handleisActiveCondition(1)} className={(activeState===1)?"btn btn-main":"btn bg-white"}>
            Available
          </button>
          <button onClick={()=>handleSecondBtn(2)} className={(secondActive===1)?"btn text-gray-500 bg-white":"btn btn-main"}>Selected ({getPlayer.length})</button>
        </div>
      </div>
      <div>
      </div>
    </>
  );
};

Toogle.propTypes = {
    handleToggle: PropTypes.func,
    getPlayer: PropTypes.array,
    resetColor: PropTypes.bool
}

export default Toogle;
