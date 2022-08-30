import "./styles.css";
export default function Fixture (props) {
  
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


  return(
    <div>
      <h1>{data.teamName} Fixtures</h1>
      <table>
<tbody>
<tr>
  <th>Team Name</th>
  <th>Games Played</th>
  <th>Wins</th>
  <th>Draw</th>
  <th>Loss</th>
  <th>Points</th>
  <th>Goals Scored</th>
  <th>Goals Conceded</th>
  <th>Goal Difference</th>
  <th></th>
</tr>
{teamList}
</tbody>

</table>
    </div>



  )
}