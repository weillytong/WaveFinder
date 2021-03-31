import React from 'react';

export default class Favorite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    const {id, beach, beachImg, surf, report, tide, wind, swell, water, weather, suit, livestream} = this.props.favorite
    return (
      <div className="favCard">
        <div className="favTitle">
          {beach}
        </div>
        <img
          className="pic"
          id="favPic"
          // src='/images/LaJolla.png'
          src={beachImg}
          onClick={this.liveStreamClick}
        />
        <div style={{fontSize: "18px"}}>
          <u> Today's Conditions </u>
        </div>
        <div>
         Surf Height: {surf} ft
        </div>
        <div>
          Tide: {tide} ft
        </div>
        <div>
          Water Temp: {water} °F
        </div>
      </div>

    )
  }
}