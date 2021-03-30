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
          <div>
            Surf
          </div>
          {surf} ft
        </div>
        <div className="report">
         <b>Afternoon Outlook:</b> {report}
        </div>
        <div className="swell">
          <div>
            Swell
          </div>
          {swell}
        </div>
        <div className="wind">
          <div>
            Wind
          </div>
          {wind} mph
        </div>
        <div className="tide">
          <div>
            Tide
          </div>
          {tide} ft
        </div>
        <div className="water">
          <div>
            Water Temp
          </div>
          {water} °F
        </div>
        <div className="weather">
          <div>
            Air Temp
          </div>
          {weather} °F
        </div>
        {/* <img src={suit}/> */}
      </div>
    )
  }


}