import { StyleSheet } from "react-native"
import COLORS from '../../assets/colors'

export default StyleSheet.create({
  accountContainer: {
    marginTop: 60
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  infoContainer: {
    paddingHorizontal: 25,
    marginBottom: 20
  },
  fullName: {
    fontWeight: '700',
    color: COLORS.darkblue,
    fontSize: 22
  },
  lightText: {
    fontWeight: '500',
    color: COLORS.lightgray
  },
  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 90/2,
    marginRight: 25
  },
  borderLight: {
    paddingVertical: 15,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: COLORS.lightgray,
  },
  overviewContainer: {
    paddingVertical: 0,
    justifyContent: 'space-between',
    marginBottom: 25
  },
  centeredText: {
    flex: 1,
    paddingVertical: 15,
    alignItems: 'center',
    fontWeight: '600'
  },
  empText: {
    fontSize: 24, 
    fontWeight: '700', 
    color: COLORS.aqua
  },
  middleBar: {
    position: 'absolute',
    left: '50%',
    width: 1,
    height: '100%',
    backgroundColor: COLORS.lightgray
  },
  rowTouchContainer: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 25
  },
  tagText: {
    paddingLeft: 20,
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.darkblue,
  },
  logoutText: {
    color: COLORS.salmon
  }
});