import { StyleSheet, Dimensions } from 'react-native'
import COLORS from '../../../assets/colors'
import { getInset } from 'react-native-safe-area-view'

const { width, height } = Dimensions.get('window')
const { sWidth, sHeight } = Dimensions.get('screen')
console.log(width, sWidth, height, sHeight, getInset('bottom'))

const styles = StyleSheet.create({
  messageScreenContainer: {
    position: 'relative',
    backgroundColor: COLORS.white,
    height: height - 50 - getInset('bottom')
  },
  gradContainer: {
    position: 'absolute',
    width,
    marginTop: getInset('top'),
    zIndex: -1,
    top: 0
  },
  headerNavigator: {
    position: 'relative',
    flexDirection: 'row',
    paddingHorizontal: 25,
    paddingTop: 15,
    paddingBottom: 100,
    marginBottom: 5
  },
  userName: {
    position: 'absolute',
    marginLeft: 'auto',
    marginRight: 'auto',
    left: 0,
    right: 0,
    top: 15,
    textAlign: 'center',
    fontSize: 20,
    zIndex: -1,
    color: COLORS.white,
    fontWeight: '700'
  },
  messageContainer: {
    borderTopRightRadius: 60,
    borderTopLeftRadius: 60,
    width,
    bottom: 0,
    height: height - 70,
    justifyContent: 'space-between',
    marginTop: 60,
    backgroundColor: COLORS.white,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: -1 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 1,
    flex: 1
  },
  scrollContainer: {
    paddingTop: 30,
    paddingHorizontal: 25,
  },
  sendContainer: {
    height: 60,
    paddingHorizontal: 25,
    paddingVertical: 18,
    backgroundColor: COLORS.red,
    width,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: -1 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 2,
    // marginBottom: 70
  }
})

export default styles