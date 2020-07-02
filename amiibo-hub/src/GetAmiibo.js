import React, { Component } from 'react'
import axios from "axios"
import AmiiboData from './AmiiboData'

class GetAmiibo extends Component {
  constructor() {
    super()
    this.state = {
      searchText: '',
      loading: false,
    }
  }

  async componentDidMount() {
    try {
      const amiiboRes = await axios('https://www.amiiboapi.com/api/amiibo/')
      this.setState({
        results: amiiboRes
      })
    } catch (error) {
      console.log(error)
    }
  }

  handleChange = (event) => {
    this.setState({
      searchText: event.target.value
    })
  }
  
  handleSearch = async () => {
    this.setState({loading: true})
    try {
      const amiiboChar = await axios('https://www.amiiboapi.com/api/amiibo/?name=' + this.state.searchText)
      this.setState({
        loading: false,
        name: amiiboChar.data.amiibo[0].character,
        amiiboSeries: amiiboChar.data.amiibo[0].amiiboSeries,
        gameSeries: amiiboChar.data.amiibo[0].gameSeries,
        release: amiiboChar.data.amiibo[0].release.na,
        image: amiiboChar.data.amiibo[0].image
      })
      console.log(amiiboChar, this.state.name, amiiboChar.data.amiibo[0].character)
    } catch (error) {
      console.log("Incorrect spelling or character not recognized!")
    }
  }

  render() {
    
    return (
      <div>

        <input type="text" onChange={this.handleChange} placeholder= "Search by Character"/>
        <button onClick={this.handleSearch}>Get Amiibo</button>
        
        <AmiiboData
          name= {this.state.name}
          aSeries= {this.state.amiiboSeries}
          gSeries= {this.state.gameSeries}
          releaseDate= {this.state.release}
          charImage={this.state.image}
        />
      </div>
    )
  }
}

export default GetAmiibo