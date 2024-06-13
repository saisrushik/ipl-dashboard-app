import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamData} = props
  const {id, teamName, teamImageUrl} = teamData

  return (
    <Link to={`/team-matches/${id}`} className="link-item">
      <li className="team-list-item">
        <div className="team-bg-container">
          <img src={teamImageUrl} className="team-logo" alt={teamName} />
          <p className="team-name-heading">{teamName}</p>
        </div>
      </li>
    </Link>
  )
}

export default TeamCard
