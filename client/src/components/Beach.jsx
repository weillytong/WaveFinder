import React from 'react';

export default class Beach extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // livestream: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    window.open(this.props.beach.livestream)
  }

  render() {
    const {id, beach, surf, report, tide, wind, swell, water, weather, suit, livestream} = this.props.beach
    return (
      <div className="card" onClick={this.handleClick}>
        <div className="beachName">
          {beach}
        </div>
        <img className="pic" src='/images/LaJolla.png'/>
        <div className="surfHeight">
          <div className="metricTitle">
            Surf Height
          </div>
          <div className="metric">
            {surf} ft
          </div>
        </div>
        <div className="report">
         <b>Afternoon Outlook:</b> {report}
        </div>
        <div className="swell">
          <div className="metricTitle">
            Swell
          </div>
          <div className="metric">
            {swell}
          </div>
        </div>
        <div className="wind">
          <div className="metricTitle">
            Wind
          </div>
          <div className="metric">
            {wind} mph
          </div>
        </div>
        <div className="tide">
          <div className="metricTitle">
            Tide
          </div>
          <div className="metric">
            {tide} ft
          </div>
        </div>
        <div className="water">
          <div className="metricTitle">
            Water Temp
          </div>
          <div className="metric">
            {water} °F
          </div>
        </div>
        <div className="weather">
          <div className="metricTitle">
            Air Temp
          </div>
          <div className="metric">
            {weather} °F
          </div>
        </div>
        {/* <img src={suit}/> */}
      </div>
    )
  }


}