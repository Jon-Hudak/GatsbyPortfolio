import { motion } from "framer-motion"
import React, {  useEffect, useState } from "react"
import Layout from "../../components/Layout.jsx"
import ButtonContainer from "../../components/multiplayerApp/ButtonContainer.jsx"

// import {AppCont} from "../../multiplayerApp/AppCont.jsx";
// import ButtonContainer from "../../multiplayerApp/ButtonContainer.jsx";
// import {GameList} from "../../multiplayerApp/GameList.jsx";
import getGoogleSheet from "../../components/multiplayerApp/getGoogleSheet.jsx"
import getPlayers from "../../components/multiplayerApp/getPlayers.jsx"
//import { FlexBuffer } from "./FlexBuffer";

const FREE_INDEX = 1
const RACE_INDEX = 2
const TITLE_INDEX = 0
const FIRST_PLAYER_INDEX = 3

const HEADERS = 0
const FIRST_GAME_INDEX = 1

export default function Multiplayer() {
  const [filter, setFilter] = useState({})
  const [playerList, setPlayerList] = useState([])
  const [games, setGames] = useState([])

  useEffect(() => {
    async function promiseHell() {
      let response = await getGoogleSheet()
      return response.values
    }
    promiseHell().then(response => {
      setGames(response)
      let players = getPlayers(response, FIRST_PLAYER_INDEX, HEADERS)
      setPlayerList(Object.keys(players))
    })
  }, [])
  //console.log(games)

  function renderGameList(value, filter) {
    if (value[TITLE_INDEX] !== "Title") {
      for (const p in filter) {
        let regEx = new RegExp(`\\b${p}\\b`, "i") // "/" needs escaped in string literal. Translates to /\b${p}\b/
        //console.log(value[TITLE_INDEX], p)
        if (filter[p] === true) {
          if (!value.some(x => regEx.test(x))) {
            return null
          }
        }
      }
      let isFree = false
      if (value[FREE_INDEX]) {
        isFree = true
      }
      return (
        <li key={value[TITLE_INDEX]}
        className={`py-1 tall:py-1 tall:md:py-5  px-5 tall:text-xl tall:md:text-2xl max-h-24  font-bold flex place-items-center bg-lime-600 border ${isFree?'border-4 border-orange-600':'border-black'}`}
        >
          {value[TITLE_INDEX]}
        </li>
      )
    }
  }
  return (
    <Layout background="bg-dark-gray">
      
        <div id="top" className=" flex flex-col tall:flex-row">
        
          
          <ButtonContainer
            id="buttonContainer"
            playerList={playerList}
            filter={filter}
            setFilter={setFilter}
          />
          <motion.ul id="gameListUl" className="mt-2 pr-1 grow auto-rows-[1fr] auto-cols-[1fr] col-spa-4 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-1 bg-black/90"
          initial={{y:"100vh"}}
          animate={{y:0}}
          transition={{delay:1,duration:1, ease:"easeOut"}}>

            {games.map(games => renderGameList(games, filter))}
          </motion.ul>
        </div>
      
    </Layout>
  )
}
