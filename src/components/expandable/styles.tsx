import {StyleSheet} from 'react-native';
import {Colors, Scaler, Size, Typo} from '../../styles';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: Colors.COLOR_WHITE,
    borderRadius: 8,
    marginVertical: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },

  headerParent: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: Size.SIZE_14,
  },

  divider: {
    height: 0.5,
    width: '100%',
  },

  child: {
    padding: Size.SIZE_14,
  },

  childContent: {
    paddingVertical: Size.SIZE_16,
  },

  topButton: {
    paddingHorizontal: Size.SIZE_14,
  },

  // == text

  title: {
    ...(Typo.TextNormalRegular as any),
  },

  caption: {
    ...(Typo.TextSmallRegular as any),
  },

  textTop: {
    ...(Typo.TextNormalRegular as any),
    color: 'gray',
  },
});

export default styles;
