import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {competingTeamLogo, competingTeam, result, matchStatus} = matchDetails

  return (
    <li className="recent-match-list-item">
      <div className="recent-match-list-item-container">
        <img
          src={competingTeamLogo}
          className="recent-match-team-logo"
          alt={`competing team ${competingTeam}`}
        />
        <p className="recent-competing-team-heading">{competingTeam}</p>
        <p className="recent-match-result">{result}</p>
        <p className="recent-match-status">{matchStatus}</p>
      </div>
    </li>
  )
}

export default MatchCard
