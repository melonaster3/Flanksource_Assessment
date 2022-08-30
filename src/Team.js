import "./styles.css";
import EachTeam from "./EachTeam"

export default function Team (props) {

  
  const teamInfo = props.teamInfo.map((team) => {
      return ( 
        <EachTeam
        teaminformation = {team}
        />
      )
  })

return(
<div>
{teamInfo}
</div>
)
}