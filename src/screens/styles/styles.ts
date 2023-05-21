import { StyleSheet } from 'react-native';
import { THEME } from '@app/utils/theme';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingBottom: 20,
    flex: 1,
  },
  content: {
    marginBottom: 40,
  },
  title: {
    fontFamily: 'Inter-Black',
    fontWeight: '800',
    fontSize: 35,
    textAlign: 'center',
    marginTop: 20,
    color: THEME.BLACK,
  },
  help: {
    color: THEME.BLACK_900,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'Inter-Light',
  }
});
