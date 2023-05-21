import { THEME } from '@app/utils/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  buttonLink: {
    backgroundColor: 'transparent',
    width: 200,
    marginHorizontal: 70,
  },
  link: {
    color: THEME.BLUE,
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'Inter-Regular',
  }
});