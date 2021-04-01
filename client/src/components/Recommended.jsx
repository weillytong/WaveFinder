import React from 'react';
import axios from 'axios';

export default class Recommended extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.clickSurfShops = this.clickSurfShops.bind(this);
    this.clickRestaurants = this.clickRestaurants.bind(this);
    this.clickBars = this.clickBars.bind(this);
  }

  clickSurfShops() {
    window.open(`https://www.yelp.com/search?find_desc=surf%20shop&find_loc=${this.props.beach.beach}&sortby=review_count`)
    // window.open(`https://www.yelp.com/search?find_desc=surf%20shop&find_loc=${this.props.beach.beach}`)
  }

  clickRestaurants() {
    window.open(`https://www.yelp.com/search?find_desc=restaurants&find_loc=${this.props.beach.beach}&sortby=review_count`)
    // window.open(`https://www.yelp.com/search?find_desc=restaurants&find_loc=${this.props.beach.beach}`)
  }

  clickBars() {
    window.open(`https://www.yelp.com/search?find_desc=bars&find_loc=${this.props.beach.beach}&sortby=review_count`)
    // window.open(`https://www.yelp.com/search?find_desc=bars&find_loc=${this.props.beach.beach}`)
  }


  render() {
    const {id, beach, beachImg, surf, report, tide, wind, swell, water, weather, suit, livestream} = this.props.beach
    return (
      <div className="recCard">
        <div style={{fontSize: "20px", textAlign: "center", margin: "10px"}}>
          {beach} Favorites
        </div>
        <div className="recsContainer" onClick={this.clickSurfShops}>
          <img className="icon" src="/images/surfer.png"/>
          <span> Surf Shops </span>
        </div>
        <div className="recsContainer" onClick={this.clickRestaurants}>
          <img className="icon" src="/images/restaurant.png"/>
          <span> Restaurants </span>
        </div>
        <div className="recsContainer" onClick={this.clickBars}>
          <img className="icon" src="/images/bars.png"/>
          <span> Bars </span>
        </div>
      </div>
    )
  }







}