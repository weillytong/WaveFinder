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
      <div onClick={this.handleClick}>
        <div className="beach">
          {beach}
        </div>
        <img src='/images/LaJolla.png'/>
        <div>
          {surf} ft
        </div>
        <div>
          {report}
        </div>
        <div>
          {tide} ft
        </div>
        <div>
          {wind} mph
        </div>
        <div>
          {swell}
        </div>
        <div>
          {water} °F
        </div>
        <div>
          {weather} °F
        </div>
        {/* <img src={suit}/> */}
      </div>
    )
  }


}