import {StyleSheet} from 'react-native';
import Theme from '../../Theme';
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: '100%',
  },
  actionButtonIcon: {
    fontSize: 25,
    color: 'white',
  },
  actionButtonItem: {},
  emptyMessage: {
    paddingTop: 40,
    textAlign: 'center',
  },
  card: {
    height: Theme.size.recordingItemHeight,
    padding: Theme.size.commonHalfMargin,
    margin: Theme.size.commonHalfMargin,
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  listItemIcon: {
    fontSize: Theme.size.iconSize,
  },
});
export default styles;
