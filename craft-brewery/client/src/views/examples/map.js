import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Button,
  TouchableOpacity
} from 'react-native';

import MapView from 'react-native-maps';

import getDirections from 'react-native-google-maps-directions'

import { NavigationActions } from 'react-navigation'

import {
  greenColor,
  mainFont
} from '../assets/styles.js';



class MapScreen extends React.Component {
  mapRef = null;

  state = {
    region: {
      latitude: 0,
      longitude: 0,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    closestLocation: {
      found: false,
      fetched: false
    }
   }

  _geolocateUser = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ region: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.0822,
          longitudeDelta: 0.0821,
        }});
      },
      (error) => console.error(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }

  _findLocations = async () => {
    return await (await (fetch(`http://api.brewerydb.com/v2/search/geo/point?key=eff2373908127af82c945953b1a2d59b&lat=${this.state.region.latitude}&lng=${this.state.region.longitude}&unit=km`)
      .then(res => {
        return res.json()
      })
      .catch(err => {
        console.error(err)
      })
    ));
  }
  _fitMap = () => {
    this.mapRef.fitToCoordinates([
      {
        latitude: this.state.region.latitude,
        longitude: this.state.region.longitude,
      },
      this.state.closestLocation.coordinates
    ], {
      edgePadding: { top: 60, right: 60, bottom: 60, left: 60 },
      animated: true,
    });
  }

  _findLocationDataGooglePlace = async (loc) => {
    await (fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${loc.name} ${loc.streetAddress}&key=AIzaSyDG4x90K-cVzeD83JUSIoFEUYV-p__rOG8`)
      .then(res => {
        // console.log(res.url);
      })
      .catch(err => {
        console.error(err)
      })
    );
  }

  _findClosestLocation = async () => {
    const locations = await (this._findLocations());

    if (locations.data) {
      for (var i = 0; i < locations.data.length; i++) {
        let currentLocation = locations.data[i];
        if (currentLocation.isClosed === 'N'
          && currentLocation.openToPublic === 'Y'
        ) {
          // const googleData = await(this._findLocationDataGooglePlace(currentLocation));
          this.setState({
            closestLocation: {
              found: true,
              name: currentLocation.name,
              distance: currentLocation.distance,
              hoursOfOperation: currentLocation.hoursOfOperation,
              address: {
                street: currentLocation.streetAddress,
                postalCode: currentLocation.postalCode,
                locality: currentLocation.region || currentLocation.locality,
              },
              brewery: {
                description: currentLocation.brewery.description,
                name: currentLocation.brewery.name,
                established: currentLocation.brewery.established,
                isOrganic: (currentLocation.brewery.isOrganic === 'Y') ? true : false,
              },
              coordinates: {
                latitude: currentLocation.latitude,
                longitude: currentLocation.longitude,
              }
            }
          });
          this._fitMap();
          return;
        }
      }
    } else {
      this.setState({
        closestLocation: {
          fetched: true,
          found: false
        }
      })
    }
  }

  componentDidMount = () => {
    this._geolocateUser();
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.region.latitude != this.state.region.latitude
      && prevState.region.longitude != this.state.region.longitude
    ) {
      this._findClosestLocation();
    }
  }

  _openInGMap = () => {
    const data = {
      source: {
       latitude: this.state.region.latitude,
       longitude: this.state.region.longitude,
      },
      destination: this.state.closestLocation.coordinates,
    }

    getDirections(data)
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {this.props.navigation.dispatch(NavigationActions.back())}}
          style={styles.iconClose}
        >
          <View>
            <Ico_close />
          </View>
        </TouchableOpacity>
        <MapView
          ref={(ref) => { this.mapRef = ref }}
          style={{width:'100%', height:'50%'}}
          showsUserLocation={true}
          followUserLocation={true}
          region={this.state.region}
        >
          {this.state.closestLocation.found &&
            <MapView.Marker
              coordinate={this.state.closestLocation.coordinates}
              image={require('../assets/pin.png')}
              centerOffset={{ x: 0, y: -25 }}
            />
          }
        </MapView>
        <View style={styles.contentContainer}>
          <ScrollView >
            <View style={styles.contentInnerContainer}>
              {this.state.closestLocation.found &&
                <View>
                  <Text style={[styles.text, styles.title]}>{this.state.closestLocation.brewery.name} - {this.state.closestLocation.name}</Text>
                  <View style={styles.metaContainer}>
                    {this.state.closestLocation.hoursOfOperation &&
                      <View style={styles.metaItemContainer}>
                        <Ico_clock/>
                        <Text style={[styles.text, styles.metaText]}>{this.state.closestLocation.hoursOfOperation}</Text>
                      </View>
                    }
                    <View style={styles.metaItemContainer}>
                      <Ico_direction/>
                      <Text style={[styles.text, styles.metaText]} onPress={this._openInGMap}>
                        Only {this.state.closestLocation.distance * 1000}m from your location{"\n"}
                        <Text style={styles.textLink}>Open in Gmaps</Text>
                      </Text>
                    </View>
                    <View style={styles.metaItemContainer}>
                      <Ico_itinerary/>
                      <Text style={[styles.text, styles.metaText]}>
                        {this.state.closestLocation.address.street},{"\n"}
                        {this.state.closestLocation.address.postalCode}&nbsp;
                        {this.state.closestLocation.address.locality}&nbsp;
                      </Text>
                    </View>
                  </View>
                  <View>
                    <Text style={styles.text}>{this.state.closestLocation.brewery.description}</Text>
                  </View>
                </View>
              }
              { this.state.closestLocation.fetched && this.state.closestLocation.found === false &&
                <Text>No location found</Text>
              }
            </View>
          </ScrollView>


        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  iconClose: {
    position: 'absolute',
    right: 20,
    top: 20,
    zIndex: 5,
    width: 24,
    height: 24,
    borderRadius: 50,
    backgroundColor: greenColor
  },
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 1,
    backgroundColor: '#fff'
  },
  contentContainer: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flex: 1,

  },
  contentInnerContainer: {
    padding: 20
  },
  text: {
    fontFamily: mainFont,
    color: '#515151',
    fontSize: 14
  },
  title: {
    fontWeight: '600',
    marginBottom: 20
  },
  metaContainer: {
    marginBottom: 5
  },
  metaItemContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 15
  },
  metaText: {
    fontSize: 12,
    paddingLeft: 10,
    marginTop: -3,
    width: 300
  },
  textLink: {
    color: '#6B6FEB'
  }
});

export default MapScreen;