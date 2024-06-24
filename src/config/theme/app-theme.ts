import {StyleSheet} from 'react-native';

export const colors = {
  darkGray: '#2D2D2D',
  lightGray: '#9B9B9B',
  orange: '#FF9427',

  textPrimary: 'white',
  textSecondary: '#666666',
  // background: '#000000',
  background: '#252122',

  btnDark: '#2D2D2D',
  btnLight: '#5c6270',
  btnOrange: '#FF9427',

  txtDark: '#a5a9b3',
  txtLight: '#ffffff',
};

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colors.background,
  },
  calculatorContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-end',
  },
  mainResult: {
    color: colors.textPrimary,
    fontSize: 70,
    fontWeight: '400',
    marginBottom: 5,
    textAlign: 'right',
  },
  subResult: {
    color: colors.textSecondary,
    fontSize: 40,
    fontWeight: '300',
    textAlign: 'right',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
    paddingHorizontal: 10,
  },
  resultContainer: {
    flex: 1,
    paddingHorizontal: 30,
    paddingBottom: 20,
    flexDirection: 'column-reverse',
  },
  buttonsContainer: {
    flex: 2,
    flexDirection: 'column',
    // flexWrap: 'wrap',
  },
});
