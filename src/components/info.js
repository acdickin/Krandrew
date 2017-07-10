import React, { Component } from 'react';
import GoogleMap from './google_map';

export default class Info extends Component {
  render() {
    return (
      <div className="flex-container">
      	<div className="title-blk blk">
      		<h2 className="title">Wedding Info</h2>
          <div className="main">
            <p><strong>Disconnect with us on our destination weekend wedding extravaganza.</strong> We intend to spend the weekend in the forest with all of you, from a welcome dinner Friday night to a send-off brunch on Sunday.</p>
            <h4>Location</h4>
            <p>Wellspring Spa is located in the small mountain town of Ashford, WA, about a 90 minute drive from Seattle. Plan on unplugging, as there is limited phone service at Wellspring, but there is plenty to do. Take time to explore one of the venue’s multiple hiking paths, check out the labyrinth or waterfall, relax in the saunas and hot tubs, we will have full access to the grounds all weekend. </p>

            <a href="http://wellspringspa.com/"><p className="link">Wellspring Spa Website</p></a>
            <p>54922 Kernahan Rd E</p>
            <p>Ashford, WA 98304</p>

            <div className='map'>
              <GoogleMap/>
            </div>


            <br/>
            <h4>Weekend Schedule</h4>
          <p>  TBD, but prepare yourselves for a weekend of fun and adventure! </p>

            <h4>Ashford Accommodations</h4>
              <p>Ashford offers a variety of accommodations, including motels, cabins, and campsites.</p>
              <p>Motels:</p>

            <h4>Seattle Accommodations</h4>
              <p>Arriving before Friday or staying after Sunday? Let us recommend some lovely locations in Seattle!</p>
              <p>Downtown:</p>
              <p>Near Airport:</p>


        	</div>
        </div>
      </div>
    );
  }
}
