import React, { Component } from 'react'
import axios from "axios"

class GetAmiibo extends Component {
  constructor() {
    super()
    this.state = {
      searchText: ''
    }
  }

  async componentDidMount() {
    try {
      const amiiboRes = await axios('https://www.amiiboapi.com/api/amiibo/')
      this.setState({
        amiiboRes: amiiboRes
      })
      // console.log(amiiboRes.data)
    } catch (error) {
      console.log(error, "Sorry! Please check your spelling and try again!")
    }
  }

  handleChange = (e) => {
    this.setState({
      searchText: e.target.value
    })
  }
  
  handleSearch = async () => {
    try {
      const amiiboChar = await axios('https://www.amiiboapi.com/api/amiibo/?name=' + this.state.searchText)
      this.setState({
        name: amiiboChar.data.amiibo[0].character,
        amiiboSeries: amiiboChar.data.amiibo[0].amiiboSeries,
        gameSeries: amiiboChar.data.amiibo[0].gameSeries,
        release: amiiboChar.data.amiibo[0].release.na,
        image: amiiboChar.data.amiibo[0].image
      })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleChange} placeholder= "Search by Character"/>
        <button onClick={this.handleSearch}>Get Started</button>
      </div>
    )
  }
}

export default GetAmiibo