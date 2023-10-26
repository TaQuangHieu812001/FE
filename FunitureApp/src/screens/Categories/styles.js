import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    marginHorizontal:12,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    marginTop: '6%',

  },
  titleHeader: {
    fontSize: 18,
    color: '#303030',
    fontWeight: '500',
  },
  iconArrow: {
    width: 24,
    height: 24,
    alignSelf:'center',
  },
  iconShopping: {
    width: 32,
    height: 32,
    alignSelf:'center',
  },

});
export default styles;
