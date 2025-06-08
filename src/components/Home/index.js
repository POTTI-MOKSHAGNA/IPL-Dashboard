// Write your code here
import './index.css'
import Loader from 'react-loader-spinner'
import {Component} from 'react'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {
    teamsList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getListData()
  }

  getListData = async () => {
    const result = await fetch('https://apis.ccbp.in/ipl')
    const data = await result.json()
    const {teams} = data
    this.setState({
      teamsList: teams.map(each => ({
        name: each.name,
        id: each.id,
        teamImageUrl: each.team_image_url,
      })),
      isLoading: false,
    })
  }

  render() {
    const {teamsList, isLoading} = this.state
    return (
      <div className="bg">
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <>
            <h1 className="head">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
                className="logo"
              />{' '}
              IPL Dashboard
            </h1>
            <ul className="a list-container">
              {teamsList.map(each => (
                <TeamCard details={each} key={each.id} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default Home
