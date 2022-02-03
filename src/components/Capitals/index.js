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

function OptionItem(params) {
  const {options} = params
  const {id, capitalDisplayText} = options

  return (
    <option id={id} value={capitalDisplayText}>
      {capitalDisplayText}
    </option>
  )
}

class Capitals extends Component {
  state = {
    country: countryAndCapitalsList[0].country,
  }

  onDisplayCountry = event => {
    const getValue = event.target.value
    const getCountryObj = countryAndCapitalsList.filter(
      eachQt =>
        eachQt.capitalDisplayText.toLowerCase() === getValue.toLowerCase(),
    )
    const getCountry = getCountryObj[0].country
    // console.log(getCountry)
    this.setState({
      country: getCountry,
    })
  }

  render() {
    const {country} = this.state

    return (
      <div className="bg">
        <div className="card">
          <h1 className="head"> Countries And Capitals</h1>
          <div className="question-box">
            <select className="options-card" onClick={this.onDisplayCountry}>
              {countryAndCapitalsList.map(eachOpt => (
                <OptionItem key={eachOpt.id} options={eachOpt} />
              ))}
            </select>
            <p className="question">is capital of which country?</p>
          </div>
          <h1 className="answer">{country}</h1>
        </div>
      </div>
    )
  }
}

export default Capitals
