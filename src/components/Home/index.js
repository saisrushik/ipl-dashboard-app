import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import {Component} from 'react'
import TeamCard from '../TeamCard/index'
import './index.css'

class Home extends Component {
  state = {teamsData: [], isLoading: true}

  componentDidMount() {
    this.fetchTeamsData()
  }

  fetchTeamsData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const teamsData = data.teams
    const updatedTeamsData = teamsData.map(eachTeam => ({
      id: eachTeam.id,
      teamName: eachTeam.name,
      teamImageUrl: eachTeam.team_image_url,
    }))
    this.setState({teamsData: updatedTeamsData, isLoading: false})
  }

  renderLoader = () => (
    <div testid="loader">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  renderTeams = () => {
    const {teamsData} = this.state
    return (
      <ul className="teams-list-items">
        {teamsData.map(eachTeam => (
          <TeamCard teamData={eachTeam} key={eachTeam.id} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="home-bg-container">
        <div className="home-content-container">
          <div className="home-heading-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              className="ipl-logo"
              alt="ipl logo"
            />
            <h1 className="home-heading">IPL Dashboard</h1>
          </div>
          <div className="teams-container">
            {isLoading ? this.renderLoader() : this.renderTeams()}
          </div>
        </div>
      </div>
    )
  }
}

export default Home
