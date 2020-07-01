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
        amiiboResults: amiiboChar.data.amiibo
      })
      console.log(amiiboChar.data)
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleChange} placeholder= "Search by Character or Game Series"/>
        <button onClick={this.handleSearch}>Get Started</button>
      </div>
    )
  }
}

export default GetAmiibo