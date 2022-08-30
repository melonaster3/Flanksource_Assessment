import "./styles.css";
import Fixture from "./Fixture.js"
export default function FixtureList (props) {
  let testDate = "2021-05-05T14:00:00";

  const data = {
    teamName : "Manchester United",
    fixtures : [
      {
        score: { "Manchester United": null, Liverpool: null },
        date: "2021-05-09T11:00:00"
      },
      {
        score: { "Manchester United": 1, "Tottenham Hotspur": 1 },
        date: "2021-05-05T11:00:00"
      }
    ]
  }

let playedGames = [];
let futureGames = [];

for (let games of data.fixtures) {
  if (games.date > testDate) {
    futureGames.push(games);
  } else {
    playedGames.push(games);
  }
}

let listkey = 0;

const playedGamesList = playedGames.map((games) => {
  listkey++;
  return ( 
  <Fixture 
  key = {listkey}
  team = {data.teamName}
  gameInfo = {games}
  played = {true}
  />
  )
})

const futureGamesList = futureGames.map((games) => {
  listkey++;
  return ( 
  <Fixture 
  key = {listkey}
  team = {data.teamName}
  gameInfo = {games}
  played = {false}

  />
  )
})


  return(
    <div>
<h1>{data.teamName} Fixtures</h1>
<table>
<tbody>
<tr>
  <th>Date</th>
  <th>Results</th>
</tr>
{futureGamesList}
{playedGamesList}

</tbody>

</table>
    </div>



  )
}