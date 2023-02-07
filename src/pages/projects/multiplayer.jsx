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
  const [filteredGames, setFilteredGames] = useState(games)

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
  useEffect(() => {
    generateGameList(games, filter)
  }, [games, filter])
  
  console.log(filteredGames);
  function renderGameList(game,i) {
    return (
      <motion.li
      layout
        key={game.title}
        className={`py-1 tall:py-1 tall:md:py-5  px-5 tall:text-xl tall:md:text-2xl max-h-24  font-bold flex place-items-center bg-lime-600 border ${
          game.free ? "border-4 border-orange-600" : "border-black"
        }`}
        variants={itemVariants}
        custom={i}
        initial={"hidden"}
        animate={"shown"}
        exit={"exit"}
        transition={{layout:{type:"spring", duration:0.6}}}
      >
        {game.title}
      </motion.li>
    )
  }
  function generateGameList(games, filter) {
    const list=[]
    let isFiltered=false;
    for (const game in games) {
      isFiltered=false;
            
      if (games[game][TITLE_INDEX]!=="Title") {
      
        
        for (const p in filter) {
          console.log(p)
          
          let regEx = new RegExp(`\\b${p}\\b`, "i") // "/" needs escaped in string literal. Translates to /\b${p}\b/
          
          if (filter[p] === true) {
            
            if (!games[game].some(x => regEx.test(x))) {
              
              isFiltered=true;
            }
          }
          //console.log(filter,isFiltered,games[game]);
        }
        let isFree = false
        if (games[game][FREE_INDEX]) {
          isFree = true
        }
        if(!isFiltered){
          list.push({title:games[game][TITLE_INDEX], free: isFree})}
        
      }
    }
    setFilteredGames(list);
  }
  const listVariants = {
    hidden: { opacity: 0, y: "100vh" },
    shown: {
      opacity: 1,
      y: 0,
      transition: {
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
    hidden: { y: "5000" },
    shown: i => ({
      x: 0,
      y: 0,
      scaleY:1,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 0.5,
        delay:i*0.02,
        bounce: 0.2,
        ease: "easeOut",
      },
    }),
    exit: {
      scaleY:0,
      opacity: 0,
      transition: {
        type: "spring",
        duration: 1,
        bounce: 0.3,
        ease: "easeOut",
      },
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
          >
            <AnimatePresence mode="popLayout">
              {filteredGames.map((game, i) => renderGameList(game, i))}
            </AnimatePresence>
          </motion.ul>
        )}
      </div>
    </Layout>
  )
}
