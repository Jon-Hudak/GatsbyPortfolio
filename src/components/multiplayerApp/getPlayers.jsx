export default function getPlayers(values, first, headers){



  let players={};
  
for (let i = first; i < values[headers].length; i++) {
    players[values[headers][i]] = false;
 
  } 
  
  return players;
}