import { StyleSheet } from "react-native"
import COLORS from '../../assets/colors'

export default StyleSheet.create({
  splitContainer: {
    marginTop: 25
	},
	titleContainer: {
		flexDirection: 'row',
		paddingHorizontal: 30
	}, 
	splitText: {
		color: COLORS.red,
		fontSize: 41,
		textAlignVertical: 'bottom'
	},
	orderText: {
		fontSize: 36,
		textAlignVertical: 'bottom'
	}
});