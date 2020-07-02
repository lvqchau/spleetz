import { StyleSheet } from "react-native"
import COLORS from '../../assets/colors'

export default StyleSheet.create({	
  flexRow: {
		flexDirection: 'row'
	},
	dateContainer: {
		width: 60,
		height: 60,
		borderRadius: 6,
		justifyContent: 'center',
		alignItems: 'center'
	},
	dateText: {
		fontWeight: '700',
		fontSize: 18,
		color: COLORS.white
	},
	yearText: {
		position: 'absolute',
		fontSize: 14,
		top: 5,
		left: -25,
		transform: [{ rotate: '270deg'}]
	},
	monthText: {
		textTransform: 'uppercase'
	},
	debtContainer: {
		flex: 4,
		position: 'relative',
		marginBottom: 20,
		borderRadius: 15,
		shadowColor: COLORS.black,
		shadowOffset: { width: 0, height: 0 },
		shadowOpacity: 0.2,
		shadowRadius: 2,
		elevation: 1,
		padding: 10,
		backgroundColor: COLORS.white
	},
	triangleCorner: {
		position: 'absolute',
		right: 0,
		bottom: 0,
		width: 20, 
		height: 20
	},
	triangle: {
		zIndex: 1000,
		flex: 1,
		width: 0,
		height: 0,
		borderBottomWidth: 20,
		borderBottomColor: COLORS.white,
		borderLeftWidth: 20,
		borderLeftColor: 'transparent'
	},
	avatarContainer: {
		width: 30,
		height: 30,
		backgroundColor: COLORS.gray,
		marginRight: 8,
		borderRadius: 50,
		alignItems: 'center'
	},
	moreUserButton: {
		height: 30,
		width: 30,
		backgroundColor: COLORS.light,
		justifyContent: 'center',
		alignItems: 'center',
		fontFamily: 'Quicksand-Bold',
		borderRadius: 30/2
	},
	addressText: {
		fontSize: 16,
		color: '#0F0000',
		marginLeft: 2
	},
	debtStatus: {
		color: COLORS.gray,
		marginTop: 7,
		fontSize: 14
	},
	moneyInfo: {
		color: COLORS.salmon
	},
	debtInfo: {
		fontFamily: 'Quicksand-Bold',
		fontWeight: 'bold',
		fontSize: 14,
		color: '#000000'
	},
	topButton: {
		paddingVertical: 8,
		alignItems: 'center',
		justifyContent: 'center'
	},
	debtButton: {
		borderTopLeftRadius: 6,
		borderBottomLeftRadius: 6
	},
	billButton: {
		borderTopRightRadius: 6,
		borderBottomRightRadius: 6
	},
	topButtonContainer: {
		flexDirection: 'row',
		marginTop: 20,
		marginBottom: 20,
		paddingHorizontal: 25,
		shadowColor: COLORS.black,
		shadowOffset: { width: 0, height: 0 },
		shadowOpacity: 0.3,
		shadowRadius: 3,
		elevation: 2,
	},
	normalButtonText: {
		color: '#A2A2A2',
		textAlignVertical: 'center',
		fontFamily: 'Montserrat-Bold',
		fontSize: 17,
		textTransform: 'capitalize'
	},
	choseButtonText: {
		color: COLORS.white
	},
	normalButton: {
		backgroundColor: COLORS.light,
		shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2
	}
})