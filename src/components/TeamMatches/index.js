import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import LatestMatch from '../LatestMatch/index'
import MatchCard from '../MatchCard/index'
import './index.css'

class TeamMatches extends Component {
  state = {teamData: {}, isLoading: true}

  componentDidMount() {
    this.fetchTeamData()
  }

  fetchTeamData = async () => {
    const {match} = this.props
    const {id} = match.params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const teamData = await response.json()
    const updatedData = {
      teamBannerUrl: teamData.team_banner_url,
      latestMatchDetails: {
        id: teamData.latest_match_details.id,
        competingTeam: teamData.latest_match_details.competing_team,
        competingTeamLogo: teamData.latest_match_details.competing_team_logo,
        date: teamData.latest_match_details.date,
        firstInnings: teamData.latest_match_details.first_innings,
        manOfTheMatch: teamData.latest_match_details.man_of_the_match,
        matchStatus: teamData.latest_match_details.match_status,
        result: teamData.latest_match_details.result,
        secondInnings: teamData.latest_match_details.second_innings,
        umpires: teamData.latest_match_details.umpires,
        venue: teamData.latest_match_details.venue,
      },
      recentMatches: teamData.recent_matches.map(recentMatch => ({
        umpires: recentMatch.umpires,
        result: recentMatch.result,
        manOfTheMatch: recentMatch.man_of_the_match,
        id: recentMatch.id,
        date: recentMatch.date,
        venue: recentMatch.venue,
        competingTeam: recentMatch.competing_team,
        competingTeamLogo: recentMatch.competing_team_logo,
        firstInnings: recentMatch.first_innings,
        secondInnings: recentMatch.second_innings,
        matchStatus: recentMatch.match_status,
      })),
    }
    this.setState({teamData: updatedData, isLoading: false})
  }

  renderLoader = () => (
    <div testid="loader">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  renderTeamDetails = () => {
    const {teamData} = this.state
    const {latestMatchDetails, teamBannerUrl, recentMatches} = teamData

    return (
      <div className="team-details-container">
        <div>
          <img src={teamBannerUrl} className="team-banner" alt="team banner" />
        </div>
        <p className="latest-matches">Latest Matches</p>
        <div>
          <LatestMatch latestMatchDetails={latestMatchDetails} />
        </div>
        <div>
          <ul className="recent-matches-list">
            {recentMatches.map(eachMatch => (
              <MatchCard matchDetails={eachMatch} key={eachMatch.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    const {match} = this.props
    const {id} = match.params
    return (
      <div className={`app-team-matches-container ${id}`}>
        {isLoading ? this.renderLoader() : this.renderTeamDetails()}
      </div>
    )
  }
}

export default TeamMatches
