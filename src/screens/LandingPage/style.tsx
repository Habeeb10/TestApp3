import {StyleSheet} from 'react-native';
import * as Colors from '../../common/colors';
import {wp, hp} from '../../common/utils';

export const LandingPageStyles = StyleSheet.create({
  container: {
    paddingTop: hp(20),
  },
  allNews: {
    fontSize: 32,
    fontWeight: '600',
  },
  input: {
    marginLeft: wp(10),
    fontSize: hp(20),
    paddingRight: wp(20),
  },
  mainContainer: {
    paddingHorizontal: wp(10),
    paddingTop: hp(20),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(15),
    alignItems: 'center',
    marginBottom: hp(20),
  },
  addNewButton: {
    backgroundColor: 'pink',
    paddingHorizontal: wp(30),
    paddingVertical: hp(10),
    borderRadius: 30,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: hp(50),
    borderRadius: 7,
    backgroundColor: Colors.Border,
    padding: 10,
  },
});
