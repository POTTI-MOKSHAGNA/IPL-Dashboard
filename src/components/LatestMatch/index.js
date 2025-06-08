// Write your code here
import './index.css'

const LatestMatch = props => {
  const {details} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeamLogo,
    competingTeam,
    firstInnings,
    secondInnings,
  } = details
  return (
    <div className="container">
      <div className="moves-right">
        <div>
          <p className="opponent">{competingTeam}</p>
          <p className="date">{date}</p>
          <p className="para">{venue}</p>
          <p className="para">{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="competingTeamLogo"
        />
      </div>
      <div>
        <p className="para">First Innings</p>
        <p className="para">{firstInnings}</p>
        <p className="para">Second Innings</p>
        <p className="para">{secondInnings}</p>
        <p className="para">Man Of The Match</p>
        <p className="para">{manOfTheMatch}</p>
        <p className="para">Umpires</p>
        <p className="para">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
