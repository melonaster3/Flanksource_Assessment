import "./styles.css";
export default function Team (props) {
  
console.log(props);
  return(
<tr>
      <td>{props.teamInfo[0]}</td>
      <td>{props.teamInfo[3].games}</td>
      <td>{props.teamInfo[3].wins}</td>
      <td>{props.teamInfo[3].lose}</td>
      <td>{props.teamInfo[3].tie}</td>
      <td>{props.teamInfo[3].points}</td>
      <td>{props.teamInfo[3].goalScored}</td>
      <td>{props.teamInfo[3].goalConceded}</td>
      <td>{props.teamInfo[2]}</td>
      </tr>
  )
}