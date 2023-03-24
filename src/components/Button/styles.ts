import { StyleSheet } from 'react-native';
import { THEME } from '../../utils/theme';

export const styles = StyleSheet.create({
  button: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginTop: 30,
    backgroundColor: THEME.GREEN,
    borderRadius: 10,
  },
  text: {
    color: THEME.WHITE,
    fontFamily: 'Inter-ExtraBold',
    fontSize: 22,
    fontWeight: '800',
  },
});
