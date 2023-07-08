import { StyleSheet } from 'react-native';
import { THEME } from '../../utils/theme';

export const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  label: {
    fontSize: 20,
    fontFamily: 'Inter-SemiBold',
    fontWeight: '700',
    color: THEME.BLACK,
  },
  input: {
    color: THEME.BLACK,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginTop: 15,
    borderWidth: 1,
    borderColor: THEME.BLACK_900,
    borderRadius: 10,
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    fontWeight: '600',
  },
  error: {
    fontSize: 16,
    fontFamily: 'Inter-Medium',
    fontWeight: '700',
    color: THEME.RED_500,
  }
});
