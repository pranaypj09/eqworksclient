import React, { Component } from "react"
import { compose } from "recompose"
import "./../Header.css"
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps"

const MapWithAMarker = compose(withScriptjs, withGoogleMap)(props => {

  return (
    <GoogleMap defaultZoom={3} defaultCenter={{ lat: 43.67, lng: -79.38 }}>
      {props.markers.map(marker => {
        const onClick = props.onClick.bind(this, marker)
        return (
          <Marker
            key={marker.poi_id}
            onClick={onClick}
            label= {marker.name}
            position={{ lat: marker.lat, lng: marker.lon }}
          >
            {props.selectedMarker === marker &&
              <InfoWindow>
                <div>
                  {marker.shelter}
                </div>
              </InfoWindow>}
          </Marker>
        )
      })}
    </GoogleMap>
  )
})

export default class ShelterMap extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shelters: [],
      selectedMarker: false,
    }
  }
  componentDidMount() {
    fetch("https://pranaypj09-wsproduct.glitch.me/poi")
      .then(r => r.json())
      .then(data => {        
        this.setState({ shelters: data  });
      })
  }
  handleClick = (marker, event) => {
    this.setState({ selectedMarker: marker })
  }
  render() {
    return (
      <div className="map-loc">
      <MapWithAMarker
        selectedMarker={this.state.selectedMarker}
        markers={this.state.shelters}
        onClick={this.handleClick}
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
      </div>
    )
  }
}
