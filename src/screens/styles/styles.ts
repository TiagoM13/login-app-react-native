import { StyleSheet } from 'react-native';
import { THEME } from '../../utils/theme';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  title: {
    fontFamily: 'Inter-Black',
    fontWeight: '800',
    fontSize: 35,
    textAlign: 'center',
    marginTop: 20,
    color: THEME.BLACK,
  },
});
