import PropTypes from "prop-types";
import { useEffect, useState } from "react";
const Toogle = ({handleToggle, getPlayer, resetColor}) => {
  const [activeState, setActiveState] = useState(1);
  const [secondActive, setSecondActive] = useState(1);
  const [changeTitle, setChangeTitle] = useState(true);

  const handleisActiveCondition = (ids) =>{
    setActiveState(ids)
    handleToggle('Available')
    setSecondActive(1)
    setChangeTitle(!changeTitle);
  }

  const handleSecondBtn = (ids) =>{
    handleToggle('selected')
    setSecondActive(ids)
    setActiveState(2)
    setChangeTitle(!changeTitle);

  }
  useEffect(()=>{
    if(resetColor){
      setSecondActive(1)
      setActiveState(1)
      setChangeTitle(!changeTitle);
    }
  }, [resetColor])
  const players = getPlayer.length

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between sticky top-28 pt-2 bg-opacity-0 bg-white z-20">
        <h1 className="text-2xl font-bold">{changeTitle?'available player':`selected player(${players}/6)`}</h1>
        <div className="flex gap-5 md:border rounded-xl font-bold bg-white bg-opacity-75">
          <button onClick={()=>handleisActiveCondition(1)} className={(activeState===1)?"btn btn-main":"btn bg-white"}>
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
