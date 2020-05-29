import { StyleSheet } from "react-native"
import COLORS from '../../assets/colors'

export default StyleSheet.create({
  flexRow: {
		flexDirection: 'row',
		// marginBottom: 5
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
		fontFamily: 'Quicksand-Bold',
		fontSize: 16,
		fontWeight: 'bold',
		color: '#0F0000',
		marginLeft: 7
	},
	debtStatus: {
		fontFamily: 'Quicksand-Bold',
		fontWeight: 'bold',
		color: COLORS.darkgray,
		marginTop: 7
	},
	debtInfo: {
		fontFamily: 'Quicksand-Bold',
		fontWeight: 'bold',
		fontSize: 14,
		color: '#000000'
	},
	topButton: {
		width: 161,
		height: 39,
		alignItems: 'center',
		justifyContent: 'space-around',
		flexDirection: 'column'
	},
	debtButton: {
		borderTopLeftRadius: 40,
		borderBottomLeftRadius: 40,
	},
	billButton: {
		borderTopRightRadius: 40,
		borderBottomRightRadius: 40,
	},
	topButtonContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginTop: 20,
		marginBottom: 20
	},
	choseButton: {
		backgroundColor: COLORS.aqua
	},
	normalButtonText: {
		color: '#000000',
		textAlignVertical: 'center',
		fontFamily: 'Montserrat',
		fontSize: 17,
		fontWeight: 'bold'
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