import React from 'react';
import Favorite from './Favorite.jsx';
import Carousel from 'react-elastic-carousel';

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favList: []
    };
    this.breakPoints = [
      { width: 1, itemsToShow: 1 },
      { width: 550, itemsToShow: 2 },
      { width: 850, itemsToShow: 3 },
      { width: 1150, itemsToShow: 4 },
      { width: 1450, itemsToShow: 5 }
    ];
  }

  render() {
    return (
      <div className="center">
        <div className="homePageTitle">
          Find Your Perfect Wave
        </div>
        <div className="userTitle">
          Weilly's Favorite Beaches
        </div>
        <div>
          <Carousel breakPoints={this.breakPoints} itemsToShow={5}  disableArrowsOnEnd={true}>
            {(localStorage.favList !== undefined)
              ?
              JSON.parse(localStorage.favList).map((favorite, key) => (
                <div className='favCard' key={key}>
                  <Favorite favorite={favorite} /*removeOutfit={this.removeOutfit}*/ />
                </div>
              ))
              :
              this.state.favList.map((favorite, key) => {
                <div className='favCard' key={key}>
                  <Favorite favorite={favorite} /*removeOutfit={this.removeOutfit}*//>
                </div>
              })
            }
          </Carousel>
        </div>
      </div>
    )
  }
}