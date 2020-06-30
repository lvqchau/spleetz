import { StyleSheet, Dimensions, Platform, StatusBar } from 'react-native'
import COLORS from '../../../assets/colors'
import { getInset } from 'react-native-safe-area-view'

const { width, height } = Dimensions.get('window')

const X_WIDTH = 375;
const X_HEIGHT = 812;

const XSMAX_WIDTH = 414;
const XSMAX_HEIGHT = 896;
const isIPhoneX = () => Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS
  ? width === X_WIDTH && height === X_HEIGHT || width === XSMAX_WIDTH && height === XSMAX_HEIGHT
  : false;

const StatusBarHeight = Platform.select({
  ios: isIPhoneX() ? 44 : 20,
  android: StatusBar.currentHeight,
  default: 0
})

const styles = StyleSheet.create({
  messageScreenContainer: {
    backgroundColor: COLORS.white,
    height: '100%',
    marginTop: -StatusBarHeight
  },
  gradContainer: {
    position: 'absolute',
    width,
    marginTop: getInset('top'),
    zIndex: -1,
    top: 0,
    paddingTop: StatusBarHeight-14
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
    color: COLORS.white,
    fontWeight: '700'
  },
  messageContainer: {
    borderTopRightRadius: 60,
    borderTopLeftRadius: 60,
    width,
    bottom: 0,
    height: height,
    justifyContent: 'space-between',
    marginTop: 60+StatusBarHeight-15,
    backgroundColor: COLORS.white,
    flex: 1
  },
  scrollContainer: {
    paddingTop: 38,
    paddingBottom: 15,
    paddingHorizontal: 25,
    flex: 11
  },
  sendContainer: {
    flex: 1,
    paddingHorizontal: 25,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    width,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: -8 },
    shadowOpacity: 0.1,
    shadowRadius: 6
  },
  sendBox: {
    flexDirection: 'row',
    backgroundColor: COLORS.lightblue,
    borderRadius: 17,
    paddingHorizontal: 14,
    paddingVertical: 8
  },
  fileIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 32,
    height: 32,
    backgroundColor: COLORS.turquoise,
    borderRadius: 10
  },
  messageInput: {
    flex: 6,
    justifyContent: 'center',
    marginHorizontal: 10
  },
  sendIcon: {
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
	flexColumn: {
		flexDirection: 'column'
	},	
	flexRow: {
		flexDirection: 'row'
	},
	flexEnd: {
		alignItems: 'flex-end'
	},
	flexStart: {
		alignItems: 'flex-start'
	},
	sendBubble: {
		maxWidth: width * 0.7,
		minWidth: width * 0.1,
		paddingVertical: 10,
		paddingRight: 18,
		paddingLeft: 22,
		borderBottomLeftRadius: 40,
		borderTopLeftRadius: 40,
		backgroundColor: '#10CBC6'
	},
	receiveBubble: {
		maxWidth: width * 0.7,
		paddingVertical: 10,
		minWidth: width * 0.1,
		paddingRight: 22,
		paddingLeft: 18,
		borderBottomRightRadius: 40,
		borderTopRightRadius: 40,
		backgroundColor: '#EAEFFC'
	},
	chatTime: {
		fontFamily: 'Quicksand-Bold',
		fontSize: 13,
		color: '#CFD3D9',
		marginBottom: 12
	},
		marginTop: 1,
	chatAvatar: {
		flexDirection: 'column', 
		paddingBottom: 30, 
		justifyContent: 'flex-end', 
		marginRight: 5,
	}
})

export default styles