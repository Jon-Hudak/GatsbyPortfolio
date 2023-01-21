import { motion } from "framer-motion"
import React, { useEffect } from "react"
// import { PlayerButton } from "./PlayerButton";
// import {BtnBox} from "./BtnBox";
// import {ButtonText} from "./ButtonText";
//import {BtnCont} from "./BtnCont";

function ButtonContainer({ playerList, filter, setFilter }) {
  function renderButtons(player) {
    let isToggled = false
    if (filter[player] === true) {
      isToggled = true
    }
    if (player == "undefined") {
      return null
    }
    return (
      <li
        className="py-1 tall:py-0 tall:max-h-16 tall:w-36 grow bg-gray-800 flex px-4 gap-4 justify-end border border-orange-600 select-none hover:bg-gray-900 active:bg-orange-900"
        onClick={() => handleClick(player, filter)}
        value={player}
        key={player}
        role="checkbox"
      >
        <span className="my-auto text-white font-mono">{player}</span>

        <div
          className={`inline-block h-3 w-3 my-auto -tranlate-x-6 ${
            isToggled ? "bg-green-500" : "bg-orange-600"
          }`}
        ></div>
      </li>
    )
  }

  function handleClick(e, filtered) {
    const toggle = !filtered[e]

    console.log(e, toggle)

    setFilter(old => ({ ...old, [e]: toggle }))
  }

  return (
    <div className="tall:basis-48 shrink-0">
      <motion.ul
        id="buttonCont"
        className="tall:m-1 bg-dark-gray fixed bottom-0 tall:left-3 tall:bottom-24 tall:top-24 z-10 py-2 px-2 gap-2 flex tall:flex-col min-w-full tall:min-w-fit border border-gray-700 shrink flex-wrap"
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
