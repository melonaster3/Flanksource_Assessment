import "./styles.css";
export default function Fixture (props) {

  console.log(props);
  let teams = Object.keys(props.gameInfo.score);
  let results; 
  if (props.played) {
    results = `${teams[0]} : ${props.gameInfo.score[teams[0]]} ${teams[1]} : ${props.gameInfo.score[teams[1]]} ` ;
  } else {
    results = `${teams[0]} : ${teams[1]} ` ;
  }

    return(
  <tr>
    <td>{props.gameInfo.date}</td>
    {!props.played && <td>{results}</td>}
    {props.played && <td>{results}</td>}
   </tr>
    )
  }

 