import React, { Component } from 'react';
import Carousel from './carousel';

export default class AboutUs extends Component {
  render() {
    return (
      <div className="flex-container">
      	<div className="title-blk blk">
          <h2 className="title" > About Us</h2>
      		<Carousel/>
      	</div>
      </div>
    );
  }
}
