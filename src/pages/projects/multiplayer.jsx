import { AnimatePresence, motion } from "framer-motion"
import React, { useEffect, useState } from "react"
import Layout from "../../components/Layout.jsx"
import ButtonContainer from "../../components/multiplayerApp/ButtonContainer.jsx"
import getGoogleSheet from "../../components/multiplayerApp/getGoogleSheet.jsx"
import getPlayers from "../../components/multiplayerApp/getPlayers.jsx"

const FREE_INDEX = 1
//const RACE_INDEX = 2
const TITLE_INDEX = 0
const FIRST_PLAYER_INDEX = 3
const HEADERS = 0
//const FIRST_GAME_INDEX = 1

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
        <motion.li
          key={value[TITLE_INDEX]}
          className={`py-1 tall:py-1 tall:md:py-5  px-5 tall:text-xl tall:md:text-2xl max-h-24  font-bold flex place-items-center bg-lime-600 border ${
            isFree ? "border-4 border-orange-600" : "border-black"
          }`}
          variants={itemVariants}
          initial={"hidden"}
          animate={"shown"}
          exit={"exit"}
        >
          {value[TITLE_INDEX]}
        </motion.li>
      )
    }
  }
  const listVariants = {
    hidden: { opacity: 0, y: "100vh" },
    shown: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
        delay: 1,
        duration: 1,
        ease: "easeOut",
      },
    },
    exit: {
      x: "100%",
      opacity: 0,
      transition: { duration: 0.5, ease: "easeIn" },
    },
  }
  const itemVariants = {
    hidden: { y:"100vh" },
    shown: (i)=>( {
      x: 0,
      y:0,
      opacity: 1,
      transition: { type: "spring", delay:0.04*i ,duration: 0.5, bounce: 0.2, ease: "easeIn" },
    }),
    exit: {
      x: "50vw",
      opacity:0,
      transition: { type: "spring", duration: 0.5, bounce: 0.3, ease: "easeOut" },
    },
  }

  return (
    <Layout
      background="bg-dark-gray"
      footerClass={"mb-24 z-0 tall:z-10 tall:mb-0"}
    >
      <div id="top" className=" flex flex-col tall:flex-row overflow-hidden ">
        <ButtonContainer
          id="buttonContainer"
          playerList={playerList}
          filter={filter}
          setFilter={setFilter}
        />

        {true && (
          <motion.ul
          
            id="gameListUl"
            className="mt-2 pr-1 p-1 grow auto-rows-[1fr] auto-cols-[1fr] col-spa-4 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-1 bg-black/90"
            key="ul"
            variants={listVariants}
            initial={"shown"}
            animate={"shown"}
            exit={"exit"}
          ><AnimatePresence mode="popLayout">
            {games.map(( games, i )=> generateGameList(games, filter,i))}</AnimatePresence>
          </motion.ul>
        )}
      </div>
    </Layout>
  )
}
