import React from 'react';
import axios from 'axios';

export default class Beach extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // livestream: false
    }
    this.liveStreamClick = this.liveStreamClick.bind(this);
    this.suitClick = this.suitClick.bind(this);
  }

  liveStreamClick() {
    window.open(this.props.beach.livestream)
  }

  suitClick() {
    window.open(this.props.beach.suit[0].website)
  }


  render() {
    const {id, beach, beachImg, surf, report, tide, wind, swell, water, weather, suit, livestream} = this.props.beach
    return (
      <div className="card">
        <button className="fas fa-star" type="button" id="favBtn" /*onClick={this.handleModal}*/ aria-label="Open"></button>
        <div className="beachName">
          {beach}
        </div>
        <img
          className="pic"
          id="locationPic"
          // src='/images/LaJolla.png'
          src={beachImg}
          onClick={this.liveStreamClick}
        />
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
        <div className="suit">
          <div className="metricTitle">
            Best Suit For Today
          </div>
          <img
            className="pic"
            id="suitPic"
            src={suit[0].img}
            onClick={this.suitClick}
          />
          <div style={{fontSize: "12px"}}>
            {suit[0].suitName}
          </div>
        </div>
      </div>
    )
  }
}