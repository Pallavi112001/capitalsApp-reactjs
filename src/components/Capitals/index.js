import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {activeCapitalId: countryAndCapitalsList[0].id}

  onChangeCapital = event =>
    this.setState({activeCapitalId: event.target.value})

  getCountry = () => {
    const {activeCapitalId} = this.state
    const getCountry = countryAndCapitalsList.find(
      each => each.id === activeCapitalId,
    )
    return getCountry.country
  }

  render() {
    const {activeCapitalId} = this.state
    const getCountry = this.getCountry(activeCapitalId)
    return (
      <div className="bg-container">
        <div className="app-container">
          <h1 className="heading">Countries And capitals</h1>
          <div className="questions-container">
            <select
              className="select"
              value={activeCapitalId}
              onChange={this.onChangeCapital}
            >
              {countryAndCapitalsList.map(eachCapital => (
                <option
                  className="option"
                  key={eachCapital.id}
                  value={eachCapital.id}
                >
                  {eachCapital.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="question">is capital of which country?</p>
          </div>
          <p className="country">{getCountry}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
