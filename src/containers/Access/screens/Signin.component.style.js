import { StyleSheet } from "react-native"
import COLORS from '../../../assets/colors'

export default StyleSheet.create({	
  flexRow: {
		flexDirection: 'row'
	},
	logo: { 
		width: 165,
		height: 69
	},
	slogan: {
		color: '#00D0CB',
		fontSize: 16,
		fontFamily: 'Montserrat-Bold',
		marginTop: 14,
		marginBottom: 20
	},
	loginForm: {
		width: '80%'
	},
	loginButton: {
		width: 182,
		height: 49,
		borderRadius: 52,
		alignItems: 'center',
		flexDirection: 'column',
		justifyContent: 'space-around',
	}
})