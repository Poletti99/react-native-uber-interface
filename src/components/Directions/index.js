import React from 'react';

import MapViewDirections from 'react-native-maps-directions';

const Directions = ({ destination, origin, onReady }) => (
  <MapViewDirections
    destination={{ ...destination }}
    origin={origin}
    onReady={onReady}
    apikey="AIzaSyBbAqDxISv6vXaC7Y3YyHVjOfCO2HcXuhY"
    strokeWidth={3}
    strokeColor="#222"
  />
);

export default Directions;
