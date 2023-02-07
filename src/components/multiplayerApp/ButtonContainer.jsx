import { motion } from "framer-motion"
import React from "react"

function ButtonContainer({ playerList, filter, setFilter }) {
  function renderButtons(player) {
    let isToggled = false
    if (filter[player] === true) {
      isToggled = true
    }
    if (player === undefined) {
      return null
    }
    return (
      <li className="py-1 tall:py-0 tall:max-h-16 tall:w-36 grow  flex">
      <button
        className="w-full flex gap-4 px-4 justify-end bg-gray-800 border border-orange-600 select-none hover:bg-gray-900 active:bg-orange-900"
        onClick={() => handleClick(player, filter)}
        onKeyDown={()=> handleKeyDown(player, filter)}
        value={player}
        key={player}
        role="checkbox"
        aria-checked={isToggled}
      >
        <span className="my-auto text-white font-mono">{player}</span>

        <div
          className={`inline-block h-3 w-3 my-auto -tranlate-x-6 ${
            isToggled ? "bg-green-500" : "bg-orange-600"
          }`}
        ></div>
      </button></li>
    )
  }
  function handleKeyDown(e, player, filter){
    if (e.key==="Enter"||e.key==="Space"){
      handleClick(player,filter)
    }
  }
  function handleClick(e, filtered) {
    const toggle = !filtered[e]
    window.scrollTo(0, 0);

    setFilter(old => ({ ...old, [e]: toggle }))
  }

  return (
    <div className="tall:basis-48 shrink-0">
      <motion.ul
        id="buttonCont"
        className="tall:m-1 bg-dark-gray fixed bottom-0 tall:left-3 tall:bottom-24 tall:top-24 z-10 py-2 px-2 gap-2 flex tall:flex-col min-w-full tall:min-w-fit border border-gray-700 shrink flex-wrap justify-around"
        initial={{ x: "-90%" }}
        animate={{ x: 0 }}
        transition={{ delay: 2, duration: 1.5, ease: "easeInOut" }}
      >
        {playerList.map(playerList => renderButtons(playerList))}
      </motion.ul>
    </div>
  )
}

export default ButtonContainer
