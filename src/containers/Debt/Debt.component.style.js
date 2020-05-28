import { StyleSheet } from "react-native"
import COLORS from '../../assets/colors'

export default StyleSheet.create({
  flexRow: {
		flexDirection: 'row'
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
		textAlign: 'center',
		textAlignVertical: 'center',
		fontFamily: 'Quicksand-Bold',
		color: '#6C6C6C',
		textTransform: 'uppercase'
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
	debtButton: {
		width: 161,
		height: 39,
		borderTopLeftRadius: 40,
		borderBottomLeftRadius: 40,
		alignItems: 'center'
	},
	billButton: {
		width: 161,
		height: 39,
		borderTopRightRadius: 40,
		borderBottomRightRadius: 40,
		alignItems: 'center'
	},
	topButtonContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginTop: 20,
		marginBottom: 20
	},
	choseButton: {
		backgroundColor: COLORS.turquoise
	},
	choseButtonText: {
		color: COLORS.white,
		height: '100%',
		textAlignVertical: 'center',
		fontFamily: 'Montserrat',
		fontSize: 17,
		fontWeight: 'bold'
	},
	normalButton: {
		backgroundColor: COLORS.gray,
		shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2
	},
	normalButtonText: {
		color: '#000000',
		height: '100%',
		textAlignVertical: 'center',
		fontFamily: 'Montserrat',
		fontSize: 17,
		fontWeight: 'bold'
	}
})