import { StyleSheet } from "react-native"
import COLORS from '../../../assets/colors'

export default StyleSheet.create({	
  flexRow: {
		flexDirection: 'row'
	},
	signUpForm: {
		width: '80%'
	},
	slogan: {
		fontFamily: 'Montserrat-Bold',
		color: '#00D0CB',
		paddingTop: 4,
		marginBottom: 20
	},
	teamImage: {
		width: 193,
		height: 192,
		marginTop: 60,
		marginBottom: 12
	},
	signUpButton: {
		width: 182,
		height: 49,
		borderRadius: 52,
		alignItems: 'center',
		flexDirection: 'column',
		justifyContent: 'space-around',
	}
})