import React from 'react';
import axios from 'axios';
import Select from 'react-select';
import BeachList from './BeachList.jsx';

const options = [
  {value: 'All Cities', label: 'All Cities'},
  {value: 'San Diego', label: 'San Diego'},
  {value: 'Los Angeles', label: 'Los Angeles'},
]


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beachList: [],
      selectedBeachList: [],
      city: ''
    };
    this.getReport = this.getReport.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.getReport();
  }

  getReport() {
    axios.get('api/surf')
      .then((results) => {
        this.setState({
          beachList: results.data
        })
      })
      .catch((err) => console.log('getReport err: ', err))
  }

  handleChange(e) {
    this.setState({
      city: e.target.value
    }, () => {
      let filteredBeachList = this.state.beachList.filter((beach) => (
        beach.city === this.state.city
      ))
      this.setState({
        selectedBeachList: filteredBeachList
      }, () => {
        console.log('this.state', this.state)
      })
    })

  }

  render() {
    if (this.state.city === '') {
      return (
        <div>
        <div className="header">
          <img className="logo" src="/images/wave.svg"/> Wave Finder
        </div>
        </div>
      )
    } else if (this.state.city === 'All Cities') {
      return (
        <div>
            <div className="header">
              <img className="logo" src="/images/wave.svg"/> Wave Finder
            </div>
            <div className="navigation">
              {/* <Select options={options}/> */}
              <select value={this.state.city} onChange={this.handleChange}>
                <option> Select an Option </option>
                <option value="All Cities"> All Cities </option>
                <option value="San Diego"> San Diego </option>
                <option value="Los Angeles"> Los Angeles </option>
              </select>
            </div>
          {/* <iframe name="goog_1212536477" sandbox="allow-scripts allow-same-origin" srcdoc="<script src=https://pagead2.googlesyndication.com/omsdk/releases/live/omweb-v1.js></script>" ></iframe> */}
          <BeachList beachList={this.state.beachList}/>
        </div>
      )
    } else {
      return (
        <div>
            <div className="header">
              <img className="logo" src="/images/wave.svg"/> Wave Finder
            </div>
          <div className="navigation">
            {/* <Select options={options}/> */}
            <select value={this.state.city} onChange={this.handleChange}>
              <option> Select an Option </option>
              <option value="All Cities"> All Cities </option>
              <option value="San Diego"> San Diego </option>
              <option value="Los Angeles"> Los Angeles </option>
            </select>
          </div>
          {/* <iframe name="goog_1212536477" sandbox="allow-scripts allow-same-origin" srcdoc="<script src=https://pagead2.googlesyndication.com/omsdk/releases/live/omweb-v1.js></script>" ></iframe> */}
          <BeachList beachList={this.state.selectedBeachList}/>
        </div>
      )
    }
  }
}