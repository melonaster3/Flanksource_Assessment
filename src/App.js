import "./styles.css";
import {data} from "./data.js"
export default function App() {
  let teamList = [];
  let teamInfo = {};
  for (let games of data) {
    let teams = Object.keys(games.score);
    teams.forEach(team => {
      if (!teamList.includes(team)) {
        teamInfo[team] = {
          points : 0,
          games : 0, 
          goalScored : 0,
          goalConceded :0
        }
        teamList.push(team);
      }
      if (games.score[team] === null) {
        games.score[team] = 0;
      }
    })

    if(games.score[teams[0]] > games.score[teams[1]] ) {
      teamInfo[teams[0]].points +=3; 
      teamInfo[teams[0]].games ++;
      teamInfo[teams[0]].goalScored += games.score[teams[0]];
      teamInfo[teams[0]].goalConceded += games.score[teams[1]];

      teamInfo[teams[1]].games ++;
      teamInfo[teams[1]].goalScored += games.score[teams[1]];
      teamInfo[teams[1]].goalConceded += games.score[teams[0]];

    }

    if(games.score[teams[1]] > games.score[teams[0]] ) {
      teamInfo[teams[1]].points +=3; 
      teamInfo[teams[1]].games ++;
      teamInfo[teams[1]].goalScored += games.score[teams[1]];
      teamInfo[teams[1]].goalConceded += games.score[teams[0]];

      teamInfo[teams[0]].games ++;
      teamInfo[teams[0]].goalScored += games.score[teams[0]];
      teamInfo[teams[0]].goalConceded += games.score[teams[1]];
    }
    
    if(games.score[teams[1]] === games.score[teams[0]] ) {
      teamInfo[teams[0]].points ++; 
      teamInfo[teams[0]].games ++;
      teamInfo[teams[0]].goalScored += games.score[teams[0]];
      teamInfo[teams[0]].goalConceded += games.score[teams[1]];

      teamInfo[teams[1]].points ++; 
      teamInfo[teams[1]].games ++;
      teamInfo[teams[1]].goalScored += games.score[teams[1]];
      teamInfo[teams[1]].goalConceded += games.score[teams[0]];
    }
  
  }
  
  console.log(teamInfo)

  return (
    <div className="App">
      <h1>Hello Codesandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
