import "./styles.css";
import {data} from "./data.js"
import TeamList from "./TeamList.js"
import FixtureList from "./FixtureList.js"

export default function App() {
  let teamList = [];
  let teamInfo = {};
  const dateTest =  "2021-05-05T14:00:00";
  for (let games of data) {
    let teams = Object.keys(games.score);
    teams.forEach(team => {
      if (!teamList.includes(team)) {
        teamInfo[team] = {
          name : team,
          points : 0,
          wins : 0,
          lose : 0,
          tie : 0,
          games : 0, 
          goalScored : 0,
          goalConceded :0,
          fixtures : []
        }
        teamList.push(team);
      }
    })

    if(dateTest > games.date){
    if(games.score[teams[0]] > games.score[teams[1]] ) {
      teamInfo[teams[0]].points +=3; 
      teamInfo[teams[0]].wins ++; 
      teamInfo[teams[0]].games ++;
      teamInfo[teams[0]].goalScored += games.score[teams[0]];
      teamInfo[teams[0]].goalConceded += games.score[teams[1]];
      teamInfo[teams[0]].fixtures.push(games);

      teamInfo[teams[1]].games ++;
      teamInfo[teams[1]].lose ++;
      teamInfo[teams[1]].goalScored += games.score[teams[1]];
      teamInfo[teams[1]].goalConceded += games.score[teams[0]];
      teamInfo[teams[1]].goalConceded += games.score[teams[0]];
      teamInfo[teams[1]].fixtures.push(games);
    }

    if(games.score[teams[1]] > games.score[teams[0]] ) {
      teamInfo[teams[1]].points +=3; 
      teamInfo[teams[1]].games ++;
      teamInfo[teams[1]].wins ++; 
      teamInfo[teams[1]].goalScored += games.score[teams[1]];
      teamInfo[teams[1]].goalConceded += games.score[teams[0]];
      teamInfo[teams[1]].fixtures.push(games);

      teamInfo[teams[0]].games ++;
      teamInfo[teams[0]].lose ++; 
      teamInfo[teams[0]].goalScored += games.score[teams[0]];
      teamInfo[teams[0]].goalConceded += games.score[teams[1]];
      teamInfo[teams[0]].fixtures.push(games);

    }
    
    if(games.score[teams[1]] === games.score[teams[0]] ) {
      teamInfo[teams[0]].points ++; 
      teamInfo[teams[0]].games ++;
      teamInfo[teams[0]].tie ++;
      teamInfo[teams[0]].goalScored += games.score[teams[0]];
      teamInfo[teams[0]].goalConceded += games.score[teams[1]];
      teamInfo[teams[0]].fixtures.push(games);

      teamInfo[teams[1]].points ++; 
      teamInfo[teams[1]].games ++;
      teamInfo[teams[1]].tie ++;
      teamInfo[teams[1]].goalScored += games.score[teams[1]];
      teamInfo[teams[1]].goalConceded += games.score[teams[0]];
      teamInfo[teams[1]].fixtures.push(games);
    }
  } else {
    teamInfo[teams[0]].fixtures.push(games);
    teamInfo[teams[1]].fixtures.push(games);
  }
  
  }

  let teamInfoArray = [];
  let teamName = Object.keys(teamInfo);
  for (let teams of teamName) {
    teamInfoArray.push(teamInfo[teams]);
  }

  let tableOrder = [];

  for (let team of teamInfoArray) {
    tableOrder.push([team.name, team.points, (team.goalScored - team.goalConceded), team])
  }

  tableOrder.sort(function(a,b) {
    return b[1] - a[1];
  })

  console.log(tableOrder);


  return (
    <div className="App">
      <h1>Premier League Top 6 Table</h1>
    <TeamList
    teamInfo = {teamInfoArray}
    tableOrder = {tableOrder}
  />

<FixtureList/>
  
      </div>
  );
}
