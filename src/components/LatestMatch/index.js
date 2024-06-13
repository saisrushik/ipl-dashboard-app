import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    result,
    umpires,
    venue,
  } = latestMatchDetails
  return (
    <div className="latest-match-details-container">
      <div className="match-details-content-container1">
        <p className="opponent-name">{competingTeam}</p>
        <p className="match-date">{date}</p>
        <p className="venue">{venue}</p>
        <p className="result">{result}</p>
      </div>
      <div>
        <img
          src={competingTeamLogo}
          className="opponent-logo"
          alt={`latest match ${competingTeam}`}
        />
      </div>
      <div className="match-details-content-container2">
        <h1 className="match-heading">First Innings</h1>
        <p className="match-description">{firstInnings}</p>
        <h1 className="match-heading">Second Innings</h1>
        <p className="match-description">{secondInnings}</p>
        <h1 className="match-heading">Man Of The Match</h1>
        <p className="match-description">{manOfTheMatch}</p>
        <h1 className="match-heading">Umpires</h1>
        <p className="match-description">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
