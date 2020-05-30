import React from 'react'
import { RNCamera } from 'react-native-camera'
import { SafeAreaView, Dimensions, View, Text, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import LinearGradient from 'react-native-linear-gradient'

import COLORS from '../../assets/colors'

const { width, height } = Dimensions.get('window')

class CameraScreen extends React.Component {
  render() {
    const {navigation} = this.props
    navigation.setOptions({ tabBarVisible: false })
    return (
      <SafeAreaView style={{
        flex: 1
        }}>
        <View style={{
          backgroundColor: COLORS.dark,
          paddingHorizontal: 25,
          paddingVertical: 15,
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row'
        }}>
          <TouchableOpacity>
            <Ionicons name="ios-flash" size={24} color={COLORS.white}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Ionicons name="md-arrow-round-forward" size={24} color={COLORS.white}/>
          </TouchableOpacity>
        </View>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={{
            flex: 1,
            width: '100%',
          }}
        >
        </RNCamera>
        <View style={{
          position: 'absolute',
          bottom: 30,
          left: width/2-30-10,
          justifyContent: 'center',
          alignItems: 'center',
          width: 76,
          height: 76,
          padding: 10,
          // backgroundColor: 'red',
          borderRadius: 76/2,
          borderWidth: 2,
          borderColor: COLORS.white
        }}>
        <LinearGradient 
        colors={COLORS.gradientPink}
        style={{
          opacity: .9,
          borderRadius: 60/2,
          width: 60,
          height: 60,
        }}
        >
        </LinearGradient>
        </View>
        <View style={{
          position: 'absolute',
          width: 50,
          height: 50,
          backgroundColor: 'rgba(0,0,0,0.6)',
          bottom: 40,
          right: '15%',
          borderRadius: 50/2,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Ionicons name="md-image" size={26} color={COLORS.white}/>
        </View>
      </SafeAreaView>
    )
  }
}

export default CameraScreen