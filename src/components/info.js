import React, { Component } from 'react';
import GoogleMap from './google_map';

export default class Info extends Component {
  render() {
    return (
      <div className="flex-container">
      	<div className="title-blk blk">
      		<h2 className="title">Wedding Info</h2>
          <div className="main">
            <h4>Location</h4>
            <p>Wellspring Spa is located in the small mountain town of Ashford, WA, about a 90 minute drive from Seattle. </p>

            <a href="http://wellspringspa.com/"><p className="link">Wellspring Spa Website</p></a>
            <p>54922 Kernahan Rd E</p>
            <p>Ashford, WA 98304</p>

            <div className='map'>
              <GoogleMap/>
            </div>



            <h4>Weekend Schedule</h4>
            <p>Friday, 3:00 PM, Wellspring Spa Check-In Opens</p>
            <p>Friday, 6:00 PM, Rehearsal Dinner, open to all guests</p>
            <p>Saturday, 10:00 AM, Pre-Celebration Brunch</p>
            <p>Saturday, 6:00 PM, Wedding Dinner</p>
            <p>Saturday, 8:00 PM, Ceremony</p>
            <p>Saturday, 8:45 PM, Reception</p>
            <p>Sunday, 11:00 AM, Post-Celebration Brunch</p>

            <h4>Ashford Accommodations</h4>
              <p>tbd</p>

            <h4>Seattle Accommodations</h4>
              <p>tbd</p>

        	</div>
        </div>
      </div>
    );
  }
}
