import React from 'react';
import axios from 'axios';
import Beach from './Beach.jsx';
import Recommended from './Recommended.jsx';

export default class BeachList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        {this.props.beachList.map((beach, key) => (
          <div className="beachContainer" key={key}>
            <Beach beach={beach}/>
            <Recommended beach={beach}/>
          </div>
        ))}
      </div>
    )
  }
}