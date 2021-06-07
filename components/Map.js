// import { Component } from 'react';
import * as React from 'react';
import {Component} from 'react';
import {render} from 'react-dom';
import MapGL, {Source, Layer} from 'react-map-gl';

import ControlPanel from './control-panel';
import {clusterLayer, clusterCountLayer, unclusteredPointLayer} from './layers';

// import geojson_data from '../json/localisation-des-equipements-sportifs-a-roubaix.geojson';

const MAPBOX_TOKEN = 'pk.eyJ1IjoiYm9vay1teS1zcG9ydCIsImEiOiJja25vOWxpcDExOXk1MnVwZXl3c24zNHZzIn0.Z0l7ZiXiaxJGYpNcwGF-Vw'; // Set your mapbox token here

class Map extends Component {
  state = {
    viewport: {
      width: '100%',
      height: '500px',
      latitude: 50.6965038397,
      longitude: 3.15838315346,
      zoom: 10
    }
  };

  _sourceRef = React.createRef();

  _onViewportChange = viewport => this.setState({viewport});

  _onClick = event => {
    const feature = event.features[0];
    const clusterId = feature.properties.cluster_id;
    const mapboxSource = this._sourceRef.current.getMap().getSource('sport');

    mapboxSource.getClusterExpansionZoom(clusterId, (err, zoom) => {
      if (err) {
        return;
      }

      this._onViewportChange({
        ...this.state.viewport,
        longitude: feature.geometry.coordinates[0],
        latitude: feature.geometry.coordinates[1],
        zoom,
        transitionDuration: 500
      });
    });
  };

  render() {
    return (
    //   <ReactMapGL
    //     mapStyle="mapbox://styles/mapbox/streets-v9"
    //     mapboxApiAccessToken="pk.eyJ1IjoiYm9vay1teS1zcG9ydCIsImEiOiJja25vOWxpcDExOXk1MnVwZXl3c24zNHZzIn0.Z0l7ZiXiaxJGYpNcwGF-Vw"
    //     onViewportChange={(viewport) => this.setState({ viewport })}
    //     {...this.state.viewport}
    //   />

    <MapGL
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxApiAccessToken="pk.eyJ1IjoiYm9vay1teS1zcG9ydCIsImEiOiJja25vOWxpcDExOXk1MnVwZXl3c24zNHZzIn0.Z0l7ZiXiaxJGYpNcwGF-Vw"
        onViewportChange={(viewport) => this.setState({ viewport })}
        {...this.state.viewport}
        interactiveLayerIds={[clusterLayer.id]}
        onClick={this._onClick}
        ref={this._sourceRef}
      >
        <Source
          id="sport"
          type="geojson"
          // data="https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson"
          // data="../json/localisation-des-equipements-sportifs-a-roubaix.geojson"
          data="https://api.jsonbin.io/b/6098dd0f6e36c66e535ebf33"
          cluster={true}
          clusterMaxZoom={14}
          clusterRadius={50}
          
        >
          <Layer {...clusterLayer} />
          <Layer {...clusterCountLayer} />
          <Layer {...unclusteredPointLayer} />
        </Source>
        {/* <ControlPanel containerComponent={this.props.containerComponent} /> */}
      </MapGL>
    );
  }
}

export default Map;