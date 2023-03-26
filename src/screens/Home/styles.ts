import { StyleSheet } from 'react-native';
import { THEME } from '../../utils/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  content: {
    marginTop: 30,
    marginBottom: 20,
    alignItems: 'center',
  },
  text: {
    color: THEME.BLACK,
    fontSize: 32,
    fontWeight: '600',
    paddingBottom: 10,
  },
  subtitle: {
    color: THEME.BLACK,
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
  },
});
