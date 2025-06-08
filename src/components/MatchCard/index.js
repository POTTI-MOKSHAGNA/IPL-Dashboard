// Write your code here
import './index.css'

const MatchCard = props => {
  const {details} = props
  const {competingTeamLogo, competingTeam, result, matchStatus} = details
  return (
    <li className="rcontainer">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="recent-logo"
      />
      <p className="recent-team">{competingTeam}</p>
      <p className="para">{result}</p>
      <p className={matchStatus}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
