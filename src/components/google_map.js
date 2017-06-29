import React, { Component } from 'react';
import { Gmaps, Marker, InfoWindow, Circle } from 'react-gmaps';

const	lat=46.760364,	lng=-121.981795;


const params = {v: '3.exp', key: 'AIzaSyBZeUH5h__CFrkAY9EUVrsy82lQZe6z1pM'};

class GoogleMap extends Component {

  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true
    });
  }

  onDragEnd(e) {
    console.log('onDragEnd', e);
  }

  onCloseClick() {
    console.log('onCloseClick');
  }

  onClick(e) {
    console.log('onClick', e);
  }

  render() {

    return (
			<Gmaps className="maps"
				width={'30rem'}
				height={'20rem'}
				lat={lat}
				lng={lng}
				zoom={7}
				loadingMessage={'Maps loading'}
				params={params}
				onMapCreated={this.onMapCreated}>
				<Marker
					lat={lat}
					lng={lng}
					draggable={true}
					onDragEnd={this.onDragEnd} />
				<InfoWindow
					lat={lat}
					lng={lng}
					content={'Welspring Spa'}
					onCloseClick={this.onCloseClick} />
				<Circle
					lat={lat}
					lng={lng}
					radius={300}
					onClick={this.onClick} />
			</Gmaps>
  	);
  }
};

export default GoogleMap ;
