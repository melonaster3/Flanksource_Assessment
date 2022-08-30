import "./styles.css";
import Team from "./Team"

export default function TeamList (props) {


  const teamList = props.tableOrder.map((team) => {
      return ( 
      <Team 
      key = {team[0]}
      teamInfo = {team}
      />
      )
  })

return(

<table>
<tbody>
<tr>
  <th>Team Name</th>
  <th>Games Played</th>
  <th>Wins</th>
  <th>Loss</th>
  <th>Draw</th>
  <th>Points</th>
  <th>Goals Scored</th>
  <th>Goals Conceded</th>
  <th>Goal Difference</th>
  <th></th>
</tr>
{teamList}
</tbody>

</table>


)
}