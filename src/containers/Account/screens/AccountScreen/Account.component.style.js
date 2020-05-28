import { StyleSheet, Dimensions } from "react-native"
import COLORS from '../../../../assets/colors'

export default StyleSheet.create({
  accountContainer: {
    paddingTop: 20
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
  borderLight: {
    paddingVertical: 15,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: COLORS.lightgray
  },
  overviewContainer: {
    paddingVertical: 0,
    justifyContent: 'space-between',
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
  accountOptions: {
    color: COLORS.aqua,
    fontWeight: '600',
    paddingLeft: 25,
    paddingVertical: 15,
    backgroundColor: 'rgba(1, 1, 1, 0.03)'

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
    color: COLORS.darkblue
  },
  logoutText: {
    color: COLORS.salmon
  },
  notiContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25
  },
  notiHolder: {
    paddingHorizontal: 0
  }
});