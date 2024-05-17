import React from 'react';
import MapView, { Polyline } from 'react-native-maps';
import { StyleSheet, Dimensions } from 'react-native';

const UserMap = () => {
  const coordinates = [
    { latitude: 12.88782332724793, longitude: 77.54887665823543 },
    { latitude: 12.893312262842812, longitude: 77.55006497198718 },
    { latitude: 12.893323213237721, longitude: 77.5499975702325 },
    { latitude: 12.893370664944413, longitude: 77.54980285404804 },
    { latitude: 12.89354222103968, longitude: 77.54981408767384 },
    { latitude: 12.893596972960609, longitude: 77.54976166408477 },
    { latitude: 12.893593322832757, longitude: 77.54964932782542 },
    { latitude: 12.893556821552949, longitude: 77.54954822519176 },
    { latitude: 12.893538570911062, longitude: 77.54946584526675 },
    { latitude: 12.893629824107279, longitude: 77.54945086709961 },
    { latitude: 12.893626173979882, longitude: 77.54938346534328 },
    { latitude: 12.89356047168134, longitude: 77.54934227538155 },
    { latitude: 12.89357142206535, longitude: 77.54910262469241 },
    { latitude: 12.893651724868832, longitude: 77.54897156572281 },
    { latitude: 12.893695526386864, longitude: 77.54879557224865 },
    { latitude: 12.893046394059652, longitude: 77.54808240315396 },
    { latitude: 12.892007724188574, longitude: 77.54720084823413 },
    { latitude: 12.89118575217148, longitude: 77.5470168715542 },
    { latitude: 12.890757681278401, longitude: 77.54714401618077 },
    { latitude: 12.890685887544663, longitude: 77.54713310508009 },
    { latitude: 12.890315879569556, longitude: 77.54705991925908 },
    { latitude: 12.889809218385949, longitude: 77.54715230166289 },
    { latitude: 12.889731472815072, longitude: 77.54718933091885 },
    { latitude: 12.889260726254221, longitude: 77.54738947182852 },
    { latitude: 12.888928080549391, longitude: 77.54748926348896 },
    { latitude: 12.888779856778896, longitude: 77.54754975843099 },
    { latitude: 12.888641195751347, longitude: 77.54758245839957 },
    { latitude: 12.888492971810976, longitude: 77.5475235984564 },
    { latitude: 12.888243087312134, longitude: 77.54748114218626 },
    { latitude: 12.887631445776776, longitude: 77.5486764200312 },
    { latitude: 12.88782332724793, longitude: 77.54887665823543 },
  ];

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 12.890315879569556, 
        longitude: 77.54887665823543,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
      <Polyline
        coordinates={coordinates}
        strokeColor="#000"
        strokeWidth={6}
      />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default UserMap;