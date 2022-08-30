import "./styles.css";
import {data} from "./data.js"
export default function App() {
  let teamList = [];
  let pointList = {};
  for (let games of data) {
    let teams = Object.keys(games.score);
    teams.forEach(team => {
      if (!teamList.includes(team)) {
        pointList[team] = 0;
        teamList.push(team);
      }
      if (games.score[team] === null) {
        games.score[team] = 0;
        
      }
    })

    if(games.score[teams[0]] > games.score[teams[1]] ) {
      pointList[teams[0]] += 3;
    }

    if(games.score[teams[1]] > games.score[teams[0]] ) {
      pointList[teams[1]] +=3;
    }
    
    if(games.score[teams[0]] === games.score[teams[1]]){
      pointList[teams[0]] +=1;
      pointList[teams[1]] +=1;
    }
    
  }
  
  console.log(pointList);

  return (
    <div className="App">
      <h1>Hello Codesandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
