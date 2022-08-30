import "./styles.css";
import {data} from "./data.js"
export default function App() {
  console.log(data);
  let teamList = [];
  for(let games of data) {
    let teams = Object.keys(games.score)
    teams.forEach( team => {
      if (!teamList.includes(team)) {
        teamList.push(team);
      }
    })
  }
  console.log(teamList)

  return (
    <div className="App">
      <h1>Hello Codesandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
